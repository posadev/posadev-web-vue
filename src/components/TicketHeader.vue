<template>
  <div class="header">
    <p class="name">{{ this.ticket.name }}</p>
    <p class="price">{{ this.ticket.price }}</p>
    <p class="date">
      {{ $d(this.ticket.start, 'short') }} - {{ $d(this.ticket.end, 'short') }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';

@Component
export default class TicketHeader extends Vue {
  @Prop({ required: true }) private ticket!: Ticket;
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
  text-transform: capitalize;
  margin: 0;
  color: $dark-color;
}
</style>
