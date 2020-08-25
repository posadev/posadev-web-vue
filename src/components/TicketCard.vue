<template>
  <div>
    <div class="ticket">
      <h2>{{ this.ticket.name }}</h2>
      <h1>{{ this.ticket.price }}</h1>
      <p>{{ formatDate(this.ticket.start) }} - {{ formatDate(this.ticket.end)  }}</p>
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
    window.open(this.ticket.url.toString());
  }
  private formatDate(date: Date) {
   const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ];
    return`${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear() -2000}`;
  }
  
}
</script>
<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';
@import '../styles/_variables.scss';

.ticket {
  width: 306px;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $inactive-color;
  
  margin: 0;
  font-family: $project-font;
}
</style>
