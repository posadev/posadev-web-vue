<template>
  <div class="columns">
    <TicketCard
      class="column col-2 col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12"
      v-for="item in orderedItems"
      v-bind:key="item.name"
      :ticket="item"
    />
  </div>
</template>

<script lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import { Component, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import mockArray from '@/mocks/tickets.mock';

@Component({
  components: { TicketCard }
})
export default class Tickets extends Vue {
  get orderedItems(): Ticket[] {
    return mockArray;
  }
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

</style>
