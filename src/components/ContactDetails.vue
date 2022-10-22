<template>
  <section class="contact-details" v-bind:contact="contact" v-if="contact">
    <div class="contact-img">
      <img v-bind:src="imgUrl" alt="" />
    </div>
    <div class="contact-info">

    <h3>{{ contact.name }}</h3>
    <h3>{{ contact.phone }}</h3>
    <h3>{{ contact.email }}</h3>
    </div>
    <div class="contact-btns">
      <button class="btn btn-send">send</button>
      <button class="btn btn-edit">edit</button>
      <button class="btn btn-delete">delete</button>
    </div>
  </section>
  <section v-else>
    <h2>please select a contact</h2>
  </section>
</template>

<script>
export default {
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
.contact-img {
  width: 20%;
}
</style>
