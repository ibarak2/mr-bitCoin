<template>
  <section class="flex contacts-page">
    <contacts-list class="contacts-list" />
    <contact-details class="contacts-details" />
  </section>
</template>

<script>
import ContactsList from '../components/ContactsList.vue'
import ContactDetails from '../components/ContactDetails.vue'

export default {
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
