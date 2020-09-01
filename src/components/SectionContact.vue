<template>
  <SectionHero :title="contactTexts">
    <template v-slot:hero-header>
      <AccentActionButton
        id="btn-contact"
        class="section-button"
        :info="contactInfo"
        v-on:button-action="onContactClick"
      />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';
import ButtonInfo from '@/data/ButtonInfo.model';
import SectionHero from '@/components/SectionHero.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';

@Component({
  components: {
    SectionHero,
    AccentActionButton
  }
})
export default class SectionContact extends Vue {
  private get contactTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.contact.title'),
      this.$t('home.contact.subtitle')
    );
  }

  private get contactInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('home.contact.topButton'));
  }

  private onContactClick() {
    window.open('mailto:contacto@jconf.com.mx');
  }
}
</script>

<style lang="scss"></style>
