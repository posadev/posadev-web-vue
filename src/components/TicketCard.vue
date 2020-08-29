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
      :ticketUrl="ticket"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import TicketButton from '@/components/TicketButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: { TicketButton }
})
export default class TicketCard extends Vue {
  @Prop() private ticket!: Ticket;
  private ticketInfo = new ButtonInfo('Comprar ahora');

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
  &:hover {
    color: $primary-color;
  }
}
.card-footer {
  &:hover {
    background-color: $primary-color;
    color: $background-ticket;
    border: none;
  }
}
.card-header {
  background-color: $background-ticket;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.name {
  font: {
    weight: bold;
    size: 24px;
  }
  padding: {
    top: 1.5rem;
    bottom: 1rem;
  }
  color: $inactive-text;
}

.price {
  font: {
    weight: bold;
    size: 55px;
  }
  padding: {
    top: 1rem;
    bottom: 2rem;
  }
  margin: {
    top: 0;
  }
  color: black;
}
.date {
  font: {
    weight: normal;
    size: 16px;
  }
  margin: 0;
  color: rgba(0, 0, 0, 0.56);
}
</style>
