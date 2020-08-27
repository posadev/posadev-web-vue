<template>
  <div class="card center">
    <div class="card-header center">
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

  private goTicketLink(): void {
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
@import '~spectre.css/src/_variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_hero';
@import '../styles/_variables.scss';

.card {
  width: 306px;
  height: 316px;
}

.card-footer {
  :hover {
    background-color: $primary-dark-color;
    border: none;
  }
}
.card-header {
  background-color: #FFFFFF;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.name {
  font: {
    family: $project-font;
    style: normal;
    weight: bold;
    size: 24px;
  }
  margin-top: 20px;
  color: $inactive-text;
}

.price {
  font: {
    family: $project-font;
    style: normal;
    weight: bold;
    size: 55px;
  }
  margin: {
    top: 0;
  }
  color: black;
}

.date {
  font: {
    family: $project-font;
    style: normal;
    weight: normal;
    size: 16px;
  }
  margin: 0;
  color: rgba(0, 0, 0, 0.56);
}
</style>
