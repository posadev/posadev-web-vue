<template>
  <div>
    <button @click="goTicketLink()" class="btn">{{ this.info.text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ButtonInfo from '@/data/ButtonInfo.model';
import Ticket from '@/data/Ticket.model';

@Component
export default class TicketButton extends Vue {
  @Prop({ required: true, type: ButtonInfo }) private info!: ButtonInfo;
  @Prop({ required: true })
  private ticketUrl!: URL;

  private goTicketLink(): void {
    window.open(this.ticketUrl.toString());
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.btn {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  font: {
    family: $project-font;
    style: normal;
    weight: bold;
    size: 21px;
  }
  button {
    width: 100%;
    height: 100%;
    background: $inactive-color;
  }
}
</style>
