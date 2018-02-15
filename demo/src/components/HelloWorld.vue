<template>
  <div class="demo">
    <h1>Internet Explorer Detection (Feature)</h1>
    <table style="width: 15%; text-align: left">
      <tr v-for="(value, key, index) in byFeature" :key="index">
        <td>
          {{snakecase(key).toUpperCase()}}
        </td>
        <td>
          <b>{{value}}</b>
        </td>
      </tr>
    </table>
    <h1>Internet Explorer Detection (User-Agent)</h1>
    <table style="width: 15%; text-align: left">
      <tr v-for="(value, key, index) in byUserAgent" :key="index">
        <td>
          {{snakecase(key).toUpperCase()}}
        </td>
        <td>
          <b>{{value}}</b>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

// Resources
import snakecase from 'lodash.snakecase'
import { detectIe } from '@@/dist'

export default {
  name: 'Demo',
  data() {
    return {
      byFeature: detectIe(),
      byUserAgent: detectIe({ useUserAgent: true })
    }
  },
  methods: {
    snakecase
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

table {
  border: 1px solid #818181;
  padding: 1em;
}
</style>
