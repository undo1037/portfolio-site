<template lang='pug'>
  .spoken
    .spoken__header
      .spoken__header__right
        .spoken__header__right__username {{ talk.name }}
        .spoken__header__right__useruserId @{{ talk.userId }}
      .spoken__header__left
        .spoken__header__left__time {{ talk.dateTime }}
    .spoken__body
      .spoken__body__reply(v-if="talk.parentId") @{{ talk.parentUserId }}
      div {{ talk.body }}
</template>

<script>
export default {
  props: {
    talk: {
      type: Object,
      default: () => ({
        id: null,
        parentId: null,
        parentUserId: null,
        userId: '',
        name: '',
        dateTime: '',
        body: ''
      })
    }
  }
}
</script>

<style scoped lang='scss'>
  .spoken {
    &__header {
      justify-content: space-between;
      display: flex;
      align-items: center;

      &__right {
        display: flex;
        align-items: center;

        &__username {
          font-size: 1.2rem;
          color: #f00;
          font-weight: bold;
        }

        &__useruserId {
          font-size: 0.8rem;
          color: #888;
          text-align: right;
          margin-left: 10px;
        }
      }

      &__left {
        &__time {
          font-size: 0.8rem;
          color: #888;
          text-align: right;
        }
      }
    }
    &__body__reply {
      color: #1b95e0;
      cursor: pointer;
      font-size: .8rem;
      margin-bottom: 5px;
    }
  }
</style>
