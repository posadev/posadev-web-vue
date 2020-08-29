<template>
  <div>
    <TicketCard
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
