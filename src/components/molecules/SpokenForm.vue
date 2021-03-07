<template lang="pug">
  .spoken-form
    textarea(v-model="message" placeholder="テキストを入力してください")
    .spoken-form__submit(@click="sendMessage")
      | 送信
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage: function () {
      if (this.message === '') { return }
      this.$emit('send-message', this.message)
      this.message = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .spoken-form {
    position: relative;
    height: 150px;
    margin-top: 1rem;

    &__submit {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 10px;
      margin: 10px;
      border-radius: 10px;
      color: #666;

      &:hover {
        cursor: pointer;
        background-color: rgb(236, 236, 236);
      }

      &:active {
        cursor: pointer;
        background-color: rgb(219, 219, 219);
        font-weight: bold;
      }
    }

    textarea {
      resize: none;
      width: 100%;
      height: 100%;
      padding: .5rem;
      border: solid thin #ccc;
      border-radius: 5px;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
    }
  }
</style>
