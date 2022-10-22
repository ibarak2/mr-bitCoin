<template>
  <section class="contact-list">
    <div
      class="contact-card"
      v-for="contact in contacts"
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
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  methods: {
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
