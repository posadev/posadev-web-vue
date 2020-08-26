<template>
  <div class="">
    <img class="img-responsive" :src="image" alt="" />
    <div class="columns">
      <h2>{{ $t('aboutevent.title') }}</h2>
      <h4>{{ $t('aboutevent.subtitle') }}</h4>
      <p>{{ $t('aboutevent.description') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { fetchImage } from '@/service/fetchImage';

@Component
export default class AboutEvent extends Vue {
  private image = '';

  @Watch('image', { immediate: true })
  private async getImage() {
    this.image = await fetchImage('about-event.jpg');
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
</style>
