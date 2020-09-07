<template>
  <div class="section-header hero hero-lg">
    <Title class="hero-body" :texts="headerTexts" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import TitleTexts from '@/data/TitleTexts.model';

@Component({
  components: { Title }
})
export default class ViewHeader extends Vue {
  @Prop({ required: true })
  private headerTexts!: TitleTexts;
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/hero';

.section-header {
  background: $primary-dark-color;
  color: $light-color;
}
</style>
