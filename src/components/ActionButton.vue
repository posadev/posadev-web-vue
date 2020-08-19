<template>
  <div class="btn" :class="{ small: this.info.isSmall }" @click="action">
    <button>{{ this.info.text }}</button>
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
    background: $accent-color;
    border: 1px solid transparent;
    border-radius: 6px;
  }

  &.small {
    width: 196px;
    height: 58px;
  }
}
</style>
