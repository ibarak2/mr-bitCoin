<template>
  <section class="flex contacts-page-wrapper">
    <button class="add-contact">
      <RouterLink :to="`/contacts/edit`">Add new contact</RouterLink>
    </button>

    <article class="flex contacts-page">
      <div class="contacts-list">
        <contacts-list :contacts="filteredContacts" />
      </div>
      <div class="contacts-details">
        <contact-details
          @remove-contact="onRemoveContact"
          @open-modal="onOpenModal"
        />
      </div>
      <div v-if="isModalOpen" class="transfer-modal">
        <transfer-modal
          @send-currency="onSendCurrency"
          @close-modal="onOpenModal"
        />
      </div>
    </article>
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
      console.log(amount)
      const newTransaction = {
        targetUserId: contact._id,
        amount,
      }
      this.$store.dispatch({ type: 'sendCurrency', newTransaction })
      this.onOpenModal()
    },
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
    },
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  components: { ContactsList, ContactDetails, TransferModal },
}
</script>

<style lang="scss" scoped>
.contacts-page-wrapper {
  height: calc(100vh - 215px);
  flex-direction: column;
  flex: 1;
  .add-contact {
    margin: 1rem;
    align-self: flex-start;
    margin: auto 0 0.5rem;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;

    &:hover {
      background-color: darken(#C4FFFE, 20%);
    }
  }
}
.contacts-page {
  margin-bottom: auto;
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
