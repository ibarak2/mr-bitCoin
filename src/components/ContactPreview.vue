<template>
  <section class="flex contact-preview" v-on:click="onSelectedContact">
    <div class="contact-img">
      <img v-bind:src="getContactImg" alt="" />
    </div>
    <div class="contact-name">
      {{ contact.name }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSelectedContact() {
      this.$emit('select-contact', this.contact._id)
    }
  },
  computed: {
    getContactImg() {
      return `https://avatars.dicebear.com/api/micah/:${this.contact._id}.svg`
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-preview {
  padding: 10px;
  gap: 5px;
  .contact-img {
    width: 50px;
    height: 50px;
  }
  .contact-name {
    flex: 1;
  }
}
</style>
