<template>
  <div class="demo">
    <h1>Detect IE/Edge version with JavaScript</h1>
    <h2>(Feature)</h2>
    <table style="width: 15%">
      <tr v-for="(value, key, index) in byFeature" :key="index">
        <td>
          {{snakecase(key).toUpperCase()}}
        </td>
        <td style="text-align: right">
          <b :style="{'color': value ? null : '#ccc'}">{{value}}</b>
        </td>
      </tr>
    </table>
    <h2>(User-Agent)</h2>
    <table style="width: 15%">
      <tr v-for="(value, key, index) in byUserAgent" :key="index">
        <td>
          {{snakecase(key).toUpperCase()}}
        </td>
        <td style="text-align: right">
          <b :style="{'color': value ? null : '#ccc'}">{{value}}</b>
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
      byUserAgent: detectIe({ useUserAgent: true }),
      queries: [
        'isDetected',
        'isEdge',
        'isBelowEdge',
        'isIe7OrLower',
        'isIe7',
        'isIe8',
        'isIe9',
        'isIe10',
        'isIe11',
        'version'
      ]
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
  padding: 1em;
  border: 1px solid #818181;
}
</style>
