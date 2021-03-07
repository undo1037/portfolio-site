<template lang="pug">
  .spoken-block(:class="{ 'spoken-block__reply-form-open' : openReplyFormFlag }")
    .spoken-block__body
      .spoken-block__body__left
        spoken-icon(v-bind:iconPath="talk.iconPath")
      .spoken-block__body__right
        spoken-body(v-bind:talk="talk")
        spoken-react-body(
          :replyCount="replys.length"
          @toggle-reply-form="openReplyFormFlag = !openReplyFormFlag"
        )
    .spoken-block__reply-form(v-if="openReplyFormFlag")
      .spoken-block(v-for="(reply, i) in replys" :key="i")
          .spoken-block__body
            .spoken-block__body__left
              spoken-icon(v-bind:iconPath="reply.iconPath")
            .spoken-block__body__right
              spoken-body(v-bind:talk="reply")
              spoken-react-body
      reply-form(@send-message="sendReply")
</template>

<script>
import SpokenIcon from '../atoms/SpokenIcon'
import SpokenBody from './SpokenBody'
import SpokenReactBody from './SpokenReactBody'
import ReplyForm from './SpokenForm.vue'

export default {
  components: { SpokenIcon, SpokenBody, SpokenReactBody, ReplyForm },
  data () {
    return {
      openReplyFormFlag: false
    }
  },
  props: {
    talk: {
      type: Object,
      default: () => {}
    },
    replys: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    sendReply: function (message) {
      this.$emit('send-message', [message, this.talk.parentId ? this.talk.parentId : this.talk.id])
    }
  }
}
</script>

<style scoped lang="scss">
  .spoken-block {
    padding: 1rem;
    text-align: left;
    border-bottom: solid 1px #ccc;

    &:hover,
    &__reply-form-open
    {
      background-color: #f7f7f7;
    }

    &__body {
      display: flex;

      &__left {
        width: 80px;
      }

      &__right {
        width: 100%;
      }
    }

    &__reply-form {
      border-radius: 5px;
      margin-top: 10px;
    }
  }
</style>
