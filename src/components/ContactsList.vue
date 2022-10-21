<template>
  <section class="contact-list">
    <div class="contact-list">
      <div
        class="contact-card"
        v-for="contact in filteredContacts"
        v-bind:key="contact._id"
      >
        <contact-preview v-bind:contact="contact" />
      </div>
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
    filteredContacts() {
      const regex = new RegExp(this.filterBy.text, 'i')
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
  },
  methods: {
    async onRemoveContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    },
    onFilter(filterBy) {
      this.filterBy = filterBy
    },
  },
  components: { ContactPreview },
}
</script>

<style lang="scss" scoped></style>
