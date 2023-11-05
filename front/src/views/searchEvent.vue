<template>
  <div>     
    <h1>もくもく探すくん</h1>
    <form @submit="searchEvents">
      <label for="keywords">キーワード検索:</label>
      <input type="text" id="keywords" v-model="keyword" placeholder="キーワードを入力">

      <label for="ym">年月検索:</label>
      <input type="text" id="ym" v-model="ym" placeholder="yyyymm">

      <button type="submit">検索</button>
    </form>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      keyword: "", // キーワード
      ym: "",      // 年月
    };
  },
  methods: {
    searchEvents() {
      // サーバーサイドへのリクエストを送信し、検索結果を取得するロジックをここに実装
      // バックエンドにリクエストを送信する際に、キーワードと年月の値を使ってAPIリクエストを作成
    }
  },
}
</script>