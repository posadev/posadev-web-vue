<template>
  <div class="card">
    <TicketHeader class="card-header" :ticket="ticket" />
    <TicketButton
      class="card-footer"
      :info="buttonInfo"
      :ticketUrl="ticket"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Ticket from '@/data/Ticket.model';
import TicketButton from '@/components/TicketButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';
import TicketHeader from '@/components/TicketHeader.vue';

@Component({
  components: { TicketButton }
})
export default class TicketCard extends Vue {
  @Prop({required: true}) private ticket!: Ticket;
  private buttonInfo = new ButtonInfo('Comprar ahora');
}
</script>
<style lang="scss">
@import '../styles/_variables.scss';

.card {
  width: 306px;
  height: 316px;
  &:hover {
    color: $primary-color;
  }
}

.card-header {
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.card-footer {
  &:hover {
    background-color: $primary-color;
    color: $background-ticket;
    border: none;
  }
}
</style>
