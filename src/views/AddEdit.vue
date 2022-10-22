<template>
  <section class="flex add-edit-contact-wrapper">
    <form class="add-edit-contact">
      <h1 class="edit-title">Contact info</h1>
      <img
        v-bind:src="avatar"
        class="contact-avatar"
      />
      <div v-if="contact" class="flex contact-inputs">
        <span for="name" class="input-span">Name</span>
        <input type="text" placeholder="Puki" v-model="contact.name" />
        <span for="email" class="input-span">Email</span>
        <input type="text" placeholder="puki@benDavid.com" v-model="contact.email" />
        <span for="phone" class="input-span">Phone</span>
        <input type="text" placeholder="054-1234567" v-model="contact.phone" />
      </div>
    <div v-else>Loading...</div>


      <button v-on:click="onSave" class="btn-save">save</button>
      <button v-on:click="onBack" class="btn-cancel">cancel</button>
    </form>
  </section>
</template>

<script>
import { contactService } from '../services/contacts-service';
import shortImgsUrl from '@/assets/imgs/imgs.js';

export default {
  data() {
    return {
      contact: null,
      avatar: null,
    }
  },
  methods: {
    async onSave() {
      this.$store.dispatch({type: 'saveContact', contact: this.contact})
      this.$router.back()
    },
    onBack() {
      this.$router.back()
    }
  },
  async created() {
    const _id = this.$route.params.id
    if(_id) {
      this.contact = await contactService.getContactById(_id)
      this.avatar = `https://avatars.dicebear.com/api/micah/:${this.contact._id}.svg`
    } else {
      this.contact = contactService.getEmptyContact()
      this.avatar = shortImgsUrl.avatar
    }
  },
}
</script>

<style lang="scss" scoped>
.add-edit-contact-wrapper {
  // height: calc(100vh - 215px);

  .add-edit-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 500px;
    margin: auto;
    gap: 2rem;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 10px;

    .edit-title {
      grid-area: 1 / 1 / 2 / 3;
      justify-self: center;
      text-align: center;
      align-self: flex-end;
    }

    .contact-avatar {
      grid-area: 2 / 1 / 3 / 2;
      justify-self: end;
    }
    .contact-inputs {
      grid-area: 2 / 2 / 3 / 3;
      gap: 0.5rem;
      display: grid;
      grid-template-columns: 45px 150px;
      width: 300px;
      justify-self: start;
      > * {
        outline: none;
        border: 1px solid lightgray;
        border-radius: 4px;
        padding: 7px;
        &:focus {
          border: 1px solid black;
        }
      }
      input::placeholder {
        color: rgb(212, 212, 212);
      }
      .input-span {
        border: none;
        margin: 0;
        padding: 0;
      }
    }
    .btn-save {
      grid-area: 3 / 2 / 4 / 3;
      padding: 20px 60px;
      border-radius: 10px;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: 600;
      justify-self: start;

      &:hover {
        background-color: darken(cyan, 10%);
        scale: 105%;
      }
    }
    .btn-cancel {
      grid-area: 3 / 1 / 4 / 2;
      background-color: transparent;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px 60px;
      transition: all 0.3s;
      font-size: 1rem;
      justify-self: end;

      &:hover {
        scale: 105%;
      }
    }
  }
}
</style>
