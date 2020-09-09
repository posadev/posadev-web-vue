<template>
  <div>
    <ViewHeader :header-texts="speakersTexts" />
    <template>
      <Speakers />
    </template>
  </div>
</template>

<script lang="ts">
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import Speakers from '@/components/Speakers.vue';
import { Component, Mixins } from 'vue-property-decorator';
import SpeakerContainer from '@/di/SpeakerContainer';

@Component({
  components: {
    ViewHeader,
    Speakers
  }
})
export default class SpeakersAll extends Mixins(SpeakerContainer) {
  private get speakersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.speakers.title'),
      this.$t('home.speakers.subtitle')
    );
  }
}
</script>

<style lang="scss">
// Style
</style>
