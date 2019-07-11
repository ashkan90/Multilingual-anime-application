<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data: () => ({

    }),
    created () {
      this.$http.get('https://cors-anywhere.herokuapp.com/http://www.turkanime.tv/animeler')
        .then((res) => {
          console.log(res)
        })
    }
  }
</script>
