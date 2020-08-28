<template>
  <div class="hero">
    <div class="hero-body">
      <Title :texts="title" />
      <slot name="hero-header"></slot>
      <slot name="hero-body"></slot>
      <slot name="hero-footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import TitleTexts from '@/data/TitleTexts.model';

@Component({
  components: { Title }
})
export default class SectionHero extends Vue {
  @Prop({ required: true })
  private title!: TitleTexts;
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/hero';
</style>
