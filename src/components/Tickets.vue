<template>
  <div class="columns">
    <TicketCard
      class="column"
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
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';

@Component({
  components: { TicketCard }
})
export default class Tickets extends Vue {
  @Inject('tickets')
  private service!: FirebaseCollectionService<Ticket>;

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

.columns {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.column {
  width: 306px;
  height: 316px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
