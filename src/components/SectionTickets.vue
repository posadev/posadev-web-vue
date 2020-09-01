<template>
  <SectionHero :title="ticketsTexts">
    <template v-slot:hero-body>
      <Tickets />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';
import Tickets from '@/components/Tickets.vue';
import SectionHero from '@/components/SectionHero.vue';

@Component({
  components: {
    SectionHero,
    Tickets
  }
})
export default class SectionTickets extends Vue {
  private get ticketsTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.tickets.title'),
      this.$t('home.tickets.subtitle')
    );
  }
}
</script>

<style lang="scss"></style>
