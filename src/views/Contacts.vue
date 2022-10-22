<template>
  <section class="flex contacts-page">
    <button class="add-con"><RouterLink :to="/contacts/edit">Add new contact</RouterLink></button>
    <div class="contacts-list">
      <contacts-list :contacts="filteredContacts"/>
    </div>
    <div class="contacts-details">
      <contact-details @remove-contact="onRemoveContact" @open-modal="onOpenModal"/>
    </div>
    <div v-if="isModalOpen" class="transfer-modal">
      <transfer-modal  @send-currency="onSendCurrency" @close-modal="onOpenModal"/>
    </div>
  </section>
</template>

<script>
import ContactsList from '../components/ContactsList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import TransferModal from '../components/TransferModal.vue'
import contact from '../store/modules/contact'

export default {
  data() {
    return {
      filterBy: {},
      isModalOpen: false,

    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    },
    onOpenModal() {
      this.isModalOpen = !this.isModalOpen
    },
    onSendCurrency(amount) {
      console.log(amount);
      const newTransaction = {
        targetUserId: contact._id,
        amount
      }
      this.$store.dispatch({type: 'sendCurrency', newTransaction})
      this.onOpenModal()
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
  components: { ContactsList, ContactDetails, TransferModal },
}
</script>

<style lang="scss" scoped>
.contacts-page {
  height: calc(100vh - 215px);
  justify-content: space-between;
  align-items: center;
  flex: 1;
  .contacts-list {
    height: 500px;
    overflow-y: auto;
    flex: 0.4;
    scroll-snap-type: y mandatory;
    border: 1px solid lightgrey;
    border-radius: 10px 0 0 10px;
  }

  .contacts-details {
    flex: 0.6;
    border: 1px solid lightgray;
    border-radius: 0 10px 10px 0;
    height: 500px;
  }
}
</style>
