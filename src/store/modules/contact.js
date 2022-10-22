import { contactService } from '@/services/contacts-service.js'

export default {
  state: {
    contacts: [],
    contact: null,
  },

  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts
    },
    removeContact(state, { contactId }) {
      const idx = state.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      state.contacts.splice(idx, 1)
      state.contact = null
    },
    saveContact(state, { contact }) {
      const contactId = contact._id
      const idx = state.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      state.contacts.splice(idx, 1, contact)
      state.contact = contact
    },
    setContact(state, { contact }) {
      state.contact = contact
    }
  },

  actions: {
    async loadContacts({ commit }) {
      const contacts = await contactService.getContacts()
      commit({ type: 'setContacts', contacts })
    },
    async removeContact({ commit }, { contactId }) {
      await contactService.deleteContact(contactId)
      commit({ type: 'removeContact', contactId })
    },
    async saveContact({ commit }, { contact }) {
      await contactService.saveContact(contact)
      commit({ type: 'saveContact', contact })
    },
    async loadContactById({ commit }, { contactId }) {
      const contact = await contactService.getContactById(contactId)
      commit({ type: 'setContact', contact })
    }
  },

  getters: {
    contacts(state) {
      return state.contacts
    },
    contact(state) {
      return state.contact
    }
  },
}
