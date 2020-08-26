<template>
  <div class="card text-center">
    <div class="card-header ">
      <p class="name">{{ this.ticket.name }}</p>
      <p class="price">{{ this.ticket.price }}</p>
      <p class="date">
        {{ formatDate(this.ticket.start) }}
        - {{ formatDate(this.ticket.end) }}
      </p>
    </div>
    <TicketButton
      class="card-footer center"
      :info="ticketInfo"
      v-on:button-action="goTicketLink"
    />
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
    return `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear() -
      2000}`;
  }
}
</script>
<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';
@import '../../node_modules/spectre.css/src/hero';
@import '../styles/_variables.scss';

.card {
  width: 306px;
  height: 316px;
}
.card-footer {
  margin: 0;
  padding: 0;
}

.name {
  font-family: $project-font;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-top: 6px;
}
.price {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  margin-top: 0;
  margin-bottom: 20px;
  color: $inactive-color;
}
.date {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
</style>
