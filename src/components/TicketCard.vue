<template>
  <div>
    <div>
      <span>{{ this.ticket.name }}</span>
      <span>{{ this.ticket.price }}</span>
      <span>{{ this.ticket.start }}</span>
      <span>{{ this.ticket.end }}</span>
    </div>
    <ActionButton :info="ticketInfo" v-on:button-action="goTicketLink" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import ActionButton from '@/components/ActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: { ActionButton }
})
export default class TicketCard extends Vue {
  @Prop() private ticket!: Ticket;
  private ticketInfo = new ButtonInfo('Comprar ahora');

  private goTicketLink() {
    window.open(this.ticket.url);
  }
}
</script>
