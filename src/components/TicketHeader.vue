<template>
    <div>
      <p class="name">{{ this.ticket.name }}</p>
      <p class="price">{{ this.ticket.price }}</p>
      <p class="date">
        {{ formatDate(this.ticket.start) }}
        - {{ formatDate(this.ticket.end) }}
      </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';

@Component 
export default class TicketHeader extends Vue {
  @Prop({ required: true}) private ticket!: Ticket;

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
@import '../styles/_variables.scss';

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
  color: $dark-color;
}
.date {
  font: {
    weight: normal;
    size: 16px;
  }
  margin: 0;
  color: $dark-color;
}
</style>
