<template>
  <section class="contact-list">
    <div
      class="contact-card"
      v-for="contact in filteredContacts"
      v-bind:key="contact._id"
    >
      <contact-preview
        v-bind:contact="contact"
        v-on:select-contact="onSelectedContact"
      />
    </div>
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
  data() {
    return {
      filterBy: {},
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts
    },
    contact() {
      return this.$store.getters.contact
    },
    filteredContacts() {
      const regex = new RegExp(this.filterBy.text, 'i')
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
  },
  methods: {
    async onRemoveContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    },
    async onSelectedContact(contactId) {
      console.log('click', contactId)
      this.$store.dispatch({ type: 'loadContactById', contactId })
    },
  },
  components: { ContactPreview },
}
</script>

<style lang="scss" scoped>
.contact-list {
  border: 1px solid lightgray;
  border-radius: 10px 0 0 10px;
  .contact-card {
    border-bottom: 1px solid lightgray;
    scroll-snap-align: center;
    cursor: pointer;

    &:hover {
      background-color: #e8e8e8;
    }
  }
}
</style>
