<template>
  <div class="col-xl-12 content">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953"
      class="img-responsive bg"
    />
    <section class="textcontent">
      <h1 class="title">J Conf GDL 2020</h1>
      <p>El evento de Java más importante de México</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media.scss';

.content {
  position: relative;
  display: block;
}
.bg {
  min-width: 100%;
}
.textcontent {
  position: absolute;
  display: block;
  left: 6.67%;
  right: 56.67%;
  top: 4.42%;
  bottom: 92.83%;
  color: $inactive-color;
}
</style>
