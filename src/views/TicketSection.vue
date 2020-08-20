<template>
  <div>
    <div v-for="item in orderedItems" v-bind:key="item.name">
      <TicketCard :ticket="item" />
    </div>
  </div>
</template>

<script lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import { Component, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';

@Component({
  components: { TicketCard }
})
export default class TicketSection extends Vue {
  get orderedItems(): Ticket[] {
    return [];
  }
}
</script>
