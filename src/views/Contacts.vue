<template>
  <section class="flex contacts-page">
    <div class="contacts-list">
      <contacts-list :contacts="filteredContacts"/>
    </div>
    <div class="contacts-details">
      <contact-details @remove-contact="onRemoveContact"/>
    </div>
  </section>
</template>

<script>
import ContactsList from '../components/ContactsList.vue'
import ContactDetails from '../components/ContactDetails.vue'

export default {
  data() {
    return {
      filterBy: {},
    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    }
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.text, 'i')
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
    contacts() {
      return this.$store.getters.contacts
    },
    contact() {
      return this.$store.getters.contact

    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  components: { ContactsList, ContactDetails },
}
</script>

<style lang="scss" scoped>
.contacts-page {
  height: calc(100vh - 215px);
  justify-content: space-between;
  align-items: center;
  flex: 1;
  .contacts-list {
    height: 498px;
    overflow-y: auto;
    flex: 0.4;
    scroll-snap-type: y mandatory;
  }

  .contacts-details {
    flex: 0.6;
    border: 1px solid lightgray;
    border-radius: 0 10px 10px 0;
    height: 498px;
  }
}
</style>
