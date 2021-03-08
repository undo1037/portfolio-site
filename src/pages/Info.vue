<template lang="pug">
  .container
    .main-title
      | undo's portfolio
    .info
      h2 About me
      .info__text
        | 島根県在住のフリーランスWebエンジニアです。
        br
        | 2016年から主にRails・Javascriptを用いた開発の仕事をしています。
        br

      h2 Skill
      .info__text
        .info__text__skill
          h3 ・Ruby
          | 主にRailsを用いた開発の仕事をしています。
          | Railsの開発は、新規設計から機能改修まで一通り経験。
          br
          | Minitest、Rspec、Capybaraなどを用いた自動テストなども行います。
          br
          | RubyGold(2.1)所持。

        .info__text__skill
          h3 ・Javascript
          | Vue.jsやJQueryでの開発経験が多めです。
          | 新規開発から機能改修まで一通り経験済です。

        .info__text__skill
          h3 ・CSS
          | カンプからの作成や改修作業、１からシンプルなデザインの構築、簡単なアニメーション処理など。
          br
          | BEMやFLOCSSなどの設計思想を用いた開発経験あり。

        .info__text__skill
          h3 ・Other
          | 趣味程度にUI/UXデザインを嗜みます。

      h2 Sample
      .info__text
        |
      ul
        li
          router-link(to='/portfolio/chat')
            | Twitterとかチャットっぽいやつ
          ul
            li Vue.jsで作成。作成期間１日半。フロント側のみ

      h2 Works
      .info__text
        | 過去に関わった仕事例
        ul
          li BtoC系サービスのWebアプリケーション（追加実装・設計・テスト）
          li 観光系サービスのWebアプリケーション新規開発（新規開発・設計・テスト）
          li 社内システムの保守・開発（追加実装・設計・テスト）
          li 大手SIerの管理システム(データ監視・追加実装・テスト)
          li BtoC系サービスのWebアプリケーション（開発・設計・テスト）

      h2 Timeline
      .info__text
        | 経歴（New→Old）
        ul
          li 2020.10：個人事業主として活動開始
          li 2020.09：株式会社パソナテック退職
          li 2018.02：株式会社パソナテック入社
          li 2017.12：株式会社spice life退職
          li 2016.04：株式会社spice life入社
          li 2016.03：松江工業高等専門学校情報工学科卒業

      h2 Social accounts
      .info__text
        .info__text__icon
          img(src='../assets/images/logo.png')
        ul
          li
            | はてなブログ：
            a(href='https://123undo.hatenablog.com/' target='_blank')
              | ひとつまえにもどる。
          li
            | Twitter：
            a(href='https://twitter.com/123undo' target='_blank')
              | @123undo
          li
            | Github：
            a(href='https://github.com/undo1037' target='_blank')
              | undo1037
          li
            | Qiita：
            a(href='https://qiita.com/undo_' target='_blank')
              | undo_

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .container {
    width: 1000px;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 0;
    text-align: left;
    font-family: 'Shippori Mincho', serif;

    .main-title {
      font-size: 3.5rem;
      text-align: left;
      font-family: 'Titillium Web', sans-serif;
    }

    .info {
      margin-top: 30px;

      &__text {
        margin: 20px;
        line-height: 1.8;

        &__skill {
          margin-bottom: 20px;
        }

        &__icon > img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }

    h2 {
      font-family: 'Titillium Web', sans-serif;
      margin: 0;
      border-bottom: solid thin;
      border-left: solid 8px;
      padding-left: 10px;
    }

    h3 {
      font-family: 'Titillium Web', sans-serif;
      margin: 0;
    }
  }

  @media only screen and (max-width: 960px) {
    .container {
      width: auto;
      padding: 1rem;

      .main-title {
        font-size: 2rem;
      }
    }
  }
</style>
