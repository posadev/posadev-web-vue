<template>
  <div>
    <ViewHeader :header-texts="speakersTexts" />
    <div>
      <SpeakerSingle />
    </div>
  </div>
</template>

<script lang="ts">
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import SpeakerSingle from '@/components/SpeakerSingle.vue';
import { Component, Mixins } from 'vue-property-decorator';
import SpeakerContainer from '@/di/SpeakerContainer';

@Component({
  components: {
    ViewHeader,
    SpeakerSingle
  }
})
export default class SpeakerSingleInfo extends Mixins(SpeakerContainer) {
  private get speakersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.speakers.title'),
      this.$t('home.speakers.subtitle')
    );
  }
}
</script>
