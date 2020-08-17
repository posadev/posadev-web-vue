<template>
  <div class="btn" :class="{ small: this.info.isSmall }" @click="action">
    <p>{{ this.info.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component
export default class ActionButton extends Vue {
  @Prop({ required: true, type: ButtonInfo }) private info!: ButtonInfo;

  @Emit('button-action')
  private action() {
    //Reserved for later usage of analytics or other action
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  width: 416px;
  height: 58px;
  background: #f59f00;
  border-radius: 6px;
  display: flex;
  justify-content: center;

  p {
    position: relative;
    text-align: center;
    font: {
      style: normal;
      weight: bold;
      size: 16px;
    }
    color: rgba(0, 0, 0, 0.8);
  }

  &.small {
    width: 196px;
    height: 58px;
  }
}
</style>
