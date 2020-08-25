<template>
  <div>
    <h1 class="title">{{ this.texts.title }}</h1>
    <p v-if="this.texts.subtitle" class="subtitle">
      {{ this.texts.subtitle }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';

@Component
export default class Title extends Vue {
  @Prop({ required: true }) private texts!: TitleTexts;
}
</script>

<style lang="scss">
@import '../styles/variables';

.title {
  font: {
    style: normal;
    weight: bold;
    size: 55px;
  }
  line-height: 30px;
}

.subtitle {
  font: {
    style: normal;
    weight: normal;
    size: 24px;
  }
  line-height: 45px;
}
</style>
