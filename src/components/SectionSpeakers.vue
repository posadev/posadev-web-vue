<template>
  <SectionHero :title="speakersTexts">
    <template v-slot:hero-body>
      <Speakers />
    </template>
    <template v-slot:hero-footer>
      <AccentActionButton
        id="btn-speakers-all"
        class="section-button"
        :info="allSpeakersButton"
        v-on:button-action="onShowSpeakers"
      />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionHero from '@/components/SectionHero.vue';
import TitleTexts from '@/data/TitleTexts.model';
import ButtonInfo from '@/data/ButtonInfo.model';
import Speakers from '@/components/Speakers.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';

@Component({
  components: {
    SectionHero,
    Speakers,
    AccentActionButton
  }
})
export default class SectionSpeakers extends Vue {
  private get speakersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.speakers.title'),
      this.$t('home.speakers.subtitle')
    );
  }

  private get speakerInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('home.speakers.topButton'));
  }

  private get allSpeakersButton(): ButtonInfo {
    return new ButtonInfo(this.$t('home.speakers.bottomButton'));
  }

  private onShowSpeakers() {
    //
  }
}
</script>

<style lang="scss">
@import '../styles/mixins';

#btn-speakers-all {
  @include media-screen-max-width(768px) {
    margin-top: 10%;
  }
}
</style>
