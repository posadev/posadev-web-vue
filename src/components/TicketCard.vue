<template>
  <div class="card">
    <TicketHeader class="card-header" :ticket="ticket" />
    <TicketButton
      class="card-footer"
      :info="buttonInfo"
      :ticketUrl="ticket.url"
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
  components: { TicketButton, TicketHeader }
})
export default class TicketCard extends Vue {
  @Prop({ required: true }) private ticket!: Ticket;
  private buttonInfo = new ButtonInfo('Comprar ahora');
}
</script>
<style lang="scss">
@import '../styles/_variables.scss';

.card {
  width: 306px;
  height: 316px;
}

.card-header {
  background-color: $light-color;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.card-footer {
  button {
    background-color: $primary-color;
    color: $light-color;

    transition: 0.25s;

    &:hover,
    &:focus {
      box-shadow: 0 0.5em 0.5em -0.4em darken($light-color, 50%);
      transform: translateY(-0.25em);
    }
  }
}
</style>
