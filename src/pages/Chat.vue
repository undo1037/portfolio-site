<template lang="pug">
  .body
    .container
      .chat-timeline
        .chat-timeline__speech(v-for="(talk, i) in talks" :key="i")
          spoken-block(
            :talk="talk"
            :replys="getReplyList(talk.id)"
            @send-message="addTalks"
          )
        spoken-form(@send-message="addTalks")
      router-link(to='/')
        | トップに戻る
</template>

<script>
import moment from 'moment'
import SpokenBlock from '../components/molecules/SpokenBlock.vue'
import SpokenForm from '../components/molecules/SpokenForm.vue'

export default {
  components: { SpokenBlock, SpokenForm },
  data () {
    return {
      talks: [
        { id: 1, parentId: null, userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:00', body: '私は、その男の写真を三葉、見たことがある。' },
        { id: 2, parentId: 1, parentUserId: 'ningen_shikkaku', userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:10', body: '一葉は、その男の、幼年時代、とでも言うべきであろうか、十歳前後かと推定される頃の写真であって、その子供が大勢の女のひとに取りかこまれ、（それは、その子供の姉たち、妹たち、それから、従姉妹たちかと想像される）庭園の池のほとりに、荒い縞の袴はかまをはいて立ち、首を三十度ほど左に傾け、醜く笑っている写真である。醜く？　けれども、鈍い人たち（つまり、美醜などに関心を持たぬ人たち）は、面白くも何とも無いような顔をして、' },
        { id: 3, parentId: 1, parentUserId: 'ningen_shikkaku', userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:20', body: '「可愛い坊ちゃんですね」' },
        { id: 4, parentId: 1, parentUserId: 'ningen_shikkaku', userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:30', body: 'といい加減なお世辞を言っても、まんざら空お世辞に聞えないくらいの、謂わば通俗の「可愛らしさ」みたいな影もその子供の笑顔に無いわけではないのだが、しかし、いささかでも、美醜に就いての訓練を経て来たひとなら、ひとめ見てすぐ、' },
        { id: 5, parentId: 1, parentUserId: 'ningen_shikkaku', userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:40', body: '「なんて、いやな子供だ」' },
        { id: 6, parentId: 1, parentUserId: 'ningen_shikkaku', userId: 'ningen_shikkaku', iconPath: require('../assets/images/cat.jpg'), name: '太宰治', dateTime: '2021-03-06 10:50', body: '頗る不快そうに呟やき、毛虫でも払いのける時のような手つきで、その写真をほうり投げるかも知れない。' }
      ]
    }
  },
  methods: {
    addTalks: function (args) {
      let message = ''
      let parentId = null

      if (typeof (args) === 'string') {
        message = args
      } else {
        [message, parentId] = args
      }

      let talk = {
        id: this.talks.length + 1,
        parentId: parentId,
        parentUserId: parent,
        userId: 'ningen_shikkaku',
        iconPath: require('../assets/images/cat.jpg'),
        name: '太宰治',
        dateTime: moment().format('YYYY-MM-DD HH:mm'),
        body: message
      }

      if (parentId) {
        let parentTalk = this.talks.find(t => t.id === parentId)
        talk.parentId = parentTalk.id
        talk.parentUserId = parentTalk.userId
      }

      this.talks.push(talk)
    },
    getReplyList: function (id) {
      return this.talks.filter(function (talk) {
        return talk.parentId === id
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .body {
    background-color: #eee;
  }
  .container {
    width: 1000px;
    background-color: #fff;
    margin: 0 auto;

    .chat-timeline {
      padding: 3rem;
    }
  }
</style>
