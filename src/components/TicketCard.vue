<template>
  <div>
    <div>
      <span>{{ this.ticket.name }}</span>
      <span>{{ this.ticket.price }}</span>
      <span>{{ this.ticket.start }}</span>
      <span>{{ this.ticket.end }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';

@Component
export default class TicketCard extends Vue {
  @Prop() private ticket!: Ticket;
}
</script>

<style lang="scss"></style>
