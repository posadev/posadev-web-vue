<template>
  <SectionHero class="section-home section-dark" :title="speakersTexts">
    <template v-slot:hero-header>
      <AccentActionButton
        id="btn-cfp"
        class="section-button"
        :info="speakerInfo"
        v-on:button-action="onCFPClick"
      />
    </template>
    <template v-slot:hero-body>
      <Speakers />
    </template>
    <template v-slot:hero-footer>
      <AccentActionButton
        id="btn-speakers-all"
        class="section-button"
        :info="seeAllSpeakers"
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
  private speakersTexts = new TitleTexts(
    this.$t('home.speakers.title'),
    this.$t('home.speakers.subtitle')
  );

  private speakerInfo = new ButtonInfo(this.$t('home.speakers.topButton'));

  private seeAllSpeakers = new ButtonInfo(
    this.$t('home.speakers.bottomButton')
  );

  private onCFPClick() {
    window.open('https://convoca.dev/jconf-mexico-2020/cfp');
  }

  private onShowSpeakers() {
    console.log('Pendiente');
  }
}
</script>

<style lang="scss"></style>
