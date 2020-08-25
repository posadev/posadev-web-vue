<template>
  <div>
    <div class="ticket">
      <h2>{{ this.ticket.name }}</h2>
      <h1>{{ this.ticket.price }}</h1>
      <p class="fecha">{{ dateStart }} - {{  }}</p>
      <TicketButton :info="ticketInfo" 
      v-on:button-action="goTicketLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import TicketButton from '@/components/TicketButton.vue';
import ButtonTicket from '@/data/ButtonTicket.model';

@Component({
  components: { TicketButton }
})
export default class TicketCard extends Vue {
  @Prop() private ticket!: Ticket;
  private ticketInfo = new ButtonTicket('Comprar ahora');

  private goTicketLink() {
    window.open(this.ticket.url);
  }
  get dateStart() {
    return this.ticket.start.toString().substring(4, 12);
  }
}
</script>
<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';
</style>
