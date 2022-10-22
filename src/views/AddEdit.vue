<template>
  <section class="flex add-edit-contact-wrapper">
    <form class="add-edit-contact">
      <img
        src="https://res.cloudinary.com/dalkffrhf/image/upload/v1666183736/mr-bitcoin/bitcoin_m1up6x.png"
        class="contact-avatar"
      />
      <div class="flex contact-inputs">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>

      <button class="btn-save">save</button>
      <button class="btn-cancel">cancel</button>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.add-edit-contact-wrapper {
  height: calc(100vh - 215px);
  border: 1px solid gold;

  .add-edit-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    margin: auto;
    gap: 1rem;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 10px;

    .contact-avatar {
      grid-area: 1 / 1 / 2 / 2;
    }
    .contact-inputs {
      grid-area: 1 / 2 / 2 / 3;
      flex-direction: column;
      gap: 1rem;

      > * {
        outline: none;
        border: 1px solid lightgray;
        border-radius: 4px;
        padding: 7px;
        &:focus {
          border: 1px solid black;
        }
      }
    }
    .btn-save {
      grid-area: 2 / 2 / 3 / 2;
      padding: 20px 60px;
      border-radius: 10px;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: 600;
      &:hover {
        background-color: darken(cyan, 10%);
        scale: 105%;
      }
    }
    .btn-cancel {
      grid-area: 2 / 1 / 3 / 2;
      background-color: transparent;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px 60px;
      transition: all 0.3s;

      &:hover {
        scale: 105%;
      }
    }
  }
}
</style>
