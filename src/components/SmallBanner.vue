<template>
  <div class="smallBanner"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SmallBanner extends Vue {}
</script>

<style lang="scss">
@import '../styles/variables';
.smallBanner {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/banner.png');
  width: 100%;
  height: 273px;
}
</style>
