<template>
  <SectionHero :title="workshopsTexts">
    <template v-slot:hero-body>
      <Workshops />
    </template>
    <template v-slot:hero-footer>
      <AccentActionButton
        id="btn-workshops-all"
        class="section-button"
        :info="seeAllWorkshops"
        v-on:button-action="onShowWorkshops"
      />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionHero from '@/components/SectionHero.vue';
import Workshops from '@/components/Workshops.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import TitleTexts from '@/data/TitleTexts.model';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: {
    SectionHero,
    Workshops,
    AccentActionButton
  }
})
export default class SectionWorkshops extends Vue {
  private get workshopsTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.workshops.title'),
      this.$t('home.workshops.subtitle')
    );
  }

  private get seeAllWorkshops(): ButtonInfo {
    return new ButtonInfo(this.$t('home.workshops.bottomButton'));
  }

  private onShowWorkshops() {
    // console.log('TODO');
  }
}
</script>

<style lang="scss"></style>
