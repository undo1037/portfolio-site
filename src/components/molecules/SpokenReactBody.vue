<template lang='pug'>
  .spoken-react
    .spoken-react__icon.spoken-react__icon--blue
      font-awesome-icon(
        v-bind:icon="{ prefix: 'far', iconName: 'comment' }"
        @click="$emit('toggle-reply-form')"
      )
      .spoken-react__icon__num {{ replyCount > 0 ? replyCount : null }}
    .spoken-react__icon.spoken-react__icon--red
      font-awesome-icon(
        v-if="status"
        v-bind:icon="{ prefix: 'fas', iconName: 'heart' }"
        class="spoken-react__icon--like"
        @click.stop="toggleStatus"
      )
      font-awesome-icon(
        v-if="!status"
        v-bind:icon="{ prefix: 'far', iconName: 'heart' }"
        @click.stop="toggleStatus"
      )
</template>

<script>
export default {
  props: {
    like: {
      type: Boolean,
      default: false
    },
    replyCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      status: this.like
    }
  },
  methods: {
    toggleStatus: function () {
      this.status = !this.status
    }
  }
}
</script>

<style scoped lang='scss'>
  .spoken-react {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;

    .spoken-react__icon {
      color: #ccc;
      cursor: pointer;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: 0 20px;
      position: relative;

      &__num {
        font-size: .8rem;
        font-family: 'arial';
        position: absolute;
        left: 30px;
      }

      &--red:hover {
        background-color: #fddbdb;

        .svg-inline--fa  {
          color: red;
        }
      }

      &--blue:hover {
        background-color: #dbe9fd;

        .svg-inline--fa,
        .spoken-react__icon__num {
          color: blue;
        }
      }

      &--like {
        color: red;
      }
    }
  }
</style>
