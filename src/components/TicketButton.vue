<template>
  <div>
    <button class="btn">{{ this.info.text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import ButtonTicket from '@/data/ButtonTicket.model';

@Component
export default class TicketButton extends Vue {
  @Prop({ required: true, type: ButtonTicket }) private info!: ButtonTicket;

  @Emit('button-action')
  private action() {
    //Reserved for later usage of analytics or other action
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
  button {
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
    font: {
      family: $project-font;
      style: normal;
      weight: bold;
      size: 24px;
      font-color: #333333;
    }
    background: $inactive-color;
  }
}
</style>
