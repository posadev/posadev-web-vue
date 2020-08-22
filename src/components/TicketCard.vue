<template>
  <div class="container_card-center">
    <div class="card-center">
      <h2 >{{ this.ticket.name }}</h2>
      <h1>{{ this.ticket.price }}</h1>
      <p >{{ this.ticket.start }} - {{ this.ticket.end }}</p>
    </div>
    <div>
      <ActionButton :info="ticketInfo" v-on:button-action="goTicketLink" />
    </div>
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
<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';
@import '../../node_modules/spectre.css/src/layout';
 
</style>
