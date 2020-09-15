<template>
  <div class="btn" :class="{ small: this.info.isSmall }" @click="action">
    <button :class="[customClass, 'action-btn']">{{ this.info.text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component
export default class ActionButton extends Vue {
  @Prop({ required: true, type: ButtonInfo })
  protected info!: ButtonInfo;

  protected customClass = 'act-btn';

  @Emit('button-action')
  private action() {
    //Reserved for later usage of analytics or other action
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.btn {
  width: 416px;
  height: 58px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 415px) {
    width: 100%;
  }
  .action-btn {
    width: 100%;
    height: 100%;
    text-align: center;
    font: {
      family: $project-font;
      style: normal;
      weight: bold;
      size: 16px;
    }
    border: 1px solid transparent;
    border-radius: 6px;

    cursor: pointer;
  }

  &.small {
    width: 196px;
    height: 58px;
    @media only screen and (max-width: 411px) {
      width: 100%;
      height: 44px;
    }
  }
}
</style>
