<template>
  <div>
    <Title :texts="titleInfo" />
    <div class="columns">
      <TicketCard
        class="column col-lg-4 col-md-8 col-sm-10 col-xs-12"
        v-for="item in orderedItems"
        v-bind:key="item.name"
        :ticket="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicketCard from '@/components/TicketCard.vue';
import Title from '@/components/Title.vue';
import Ticket from '@/data/Ticket.model';
import TitleTexts from '@/data/TitleTexts.model';
import mockArray from '@/mocks/tickets.mock';

@Component({
  components: { TicketCard, Title }
})
export default class TicketSection extends Vue {
  private titleInfo = new TitleTexts(
    'Tickets',
    'Get yours while they are still available'
  );

  get orderedItems(): Ticket[] {
    return mockArray;
  }
}
</script>

<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';

.columns {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}
</style>
