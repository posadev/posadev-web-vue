<template>
  <div class="col-xl-12 content">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953"
      class="img-responsive bg"
    />
    <section class="textcontent text-format">
      <h1 class="title">J Conf GDL 2020</h1>
      <p class="text">El evento de Java más importante de México</p>
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

.text-format {
  color: $inactive-color;
  text-align: -webkit-left;
}
@mixin position($top, $left, $right, $bottom) {
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
  position: absolute;
}
//Ipads and phones
@media only screen and (max-width: 928px) {
  section {
    background: $primary-dark-color;
    height: 13rem;
    position: relative;

    h1 {
      @include position(10%, 4.44%, 50%, 0%);
    }
    p {
      @include position(40.49%, 4.44%, 30.0%, 91.38%);
    }
  }
  .title {
    font-size: 32px;
    line-height: 39px;
  }
}
//Laptops and computers
@media only screen and (min-width: 929px) {
  .text {
    font-size: 24px;
    line-height: 43px;
  }
  .title {
    font-size: 78px;
    line-height: 80px;
  }
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
    top: 33.42%;
  }
}
</style>
