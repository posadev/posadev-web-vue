<template>
<div>
  <div>
    <h1>Tickets</h1>
    <h2>Get yours while they are still available</h2>
  </div>
  <div class="columns">
    <div v-for="item in orderedItems" v-bind:key="item.name">
      <TicketCard :ticket="item" />
    </div>
  </div>
</div>
</template>
<script lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import mockTicket from '@/mocks/tickets.mock.js';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { TicketCard }
})
export default class TicketSection extends Vue {
  private items = mockTicket;

  get orderedItems() {
    return this.items.slice().sort((a, b) => {
      return a.price - b.price;
    });
  }
}
</script>

<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';
</style>
*
