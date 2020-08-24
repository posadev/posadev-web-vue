<template>
  <div class="btn">
    <button>{{ this.info.text }}</button>
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
  width: 416px;
  height: 58px;
  display: flex;
  justify-content: center;

  button {
    width: 100%;
    height: 100%;
    text-align: center;
    font: {
      family: $project-font;
      style: normal;
      weight: bold;
      size: 16px;
    }
    background: red;
    border: 1px solid transparent;
    border-radius: 6px;
  }
}
</style>
