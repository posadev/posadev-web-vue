<template>
  <div class="columns content-tickets">
    <TicketCard
      class="column card-ticket"
      v-for="item in tickets"
      v-bind:key="item.name"
      :ticket="item"
    />
  </div>
</template>

<script lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import { Component, Inject, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import { FirestoreService } from '@/service/FirestoreService';

@Component({
  components: { TicketCard }
})
export default class Tickets extends Vue {
  @Inject('tickets')
  private service!: FirestoreService<Ticket>;

  private tickets: Ticket[] = [];

  created(): void {
    this.service.findAll().then((response: Ticket[]) => {
      this.tickets.push(...response);
    });
  }
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

.card-ticket {
  @media only screen and (max-width: 959px) {
    min-width: 50%;
    margin-bottom: 3%;
  }
}
.content-tickets {
  max-width: 100%;
}
</style>
