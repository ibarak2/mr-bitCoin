<template>
  <section class="flex selected-contact" v-if="contact">
    <button class="btn btn-action btn-edit">
      <RouterLink :to="`/contacts/edit/${contact._id}`">
        <img v-bind:src="editContact" />
      </RouterLink>
    </button>
    <div class="contact-img">
      <img v-bind:src="imgUrl" />
    </div>
    <h3 class="contact-name">{{ contact.name }}</h3>
    <div class="flex contact-info">
      <span>{{ contact.phone }}</span>
      <span>{{ contact.email }}</span>
    </div>
    <button class="flex btn btn-send" @click="onOpenModal">
      send
      <img v-bind:src="sendCurrency" class="send-icon">
    </button>
    <button @click="onRemoveContact(contact._id)" class="btn btn-action btn-delete">
      <img v-bind:src="deleteContact" />
    </button>
  </section>

  <section class="flex please-select" v-else>
    <h2>Please select a contact</h2>
  </section>
</template>

<script>
import shortImgsUrl from '@/assets/imgs/imgs.js'

export default {
  data() {
    return {
      editContact: shortImgsUrl.edit,
      deleteContact: shortImgsUrl.delete,
      sendCurrency: shortImgsUrl.send,
    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove-contact', contactId)
    },
    onSendBit(contactId) {
      console.log('send', contactId);
    },
    onOpenModal() {
      this.$emit('open-modal')
    }
  },
  computed: {
    contact() {
      return this.$store.getters.contact
    },
    imgUrl() {
      return `https://avatars.dicebear.com/api/micah/:${this.contact._id}.svg`
    },
  },
}
</script>

<style lang="scss" scoped>
.please-select {
  justify-content: center;
  margin: 1rem;
}

.selected-contact {
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 500px;

  > * {
    margin: 0;
  }
  .contact-img {
    width: 20%;
  }
  .contact-name {
    font-size: 1.5rem;
    text-align: center;
    @media (min-width: 750px) {
      font-size: 2.5rem;
    }
  }
  .contact-info {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 0.875em;
    @media (min-width: 750px) {
      font-size: 1em;
      flex-direction: row;
    }
  }
  .btn-send {
    padding: 20px 60px;
    border-radius: 10px;
    transition: all 0.3s;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
      background-color: darken(#C4FFFE, 20%);
      scale: 105%;
    }

    .send-icon {
      width: 15px;
      filter: opacity(0.6) drop-shadow(0 0 0 #585858); 
    }
  }
  .btn-action {
    align-self: flex-end;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    transition: all 0.2s;

    &:hover {
      background-color: lightgray;
    }
  }
}
</style>
