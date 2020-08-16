<template>
  <div class="content-box">
    <img class="photo-md" :src="this.info.photoURL" alt="Foto del instructor" />
    <p class="content-title">{{ this.info.name }}</p>
    <p class="content-sub">{{ this.info.speakerName }}</p>
    <img
      class="content-arrow"
      src="../assets/right-arrow-vector.png"
      alt="Mas información"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkshopInfo from '@/data/WorkshopInfo.model';

@Component
export default class WorkshopCard extends Vue {
  @Prop() private info!: WorkshopInfo;
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

%content-text {
  position: absolute;
  left: 37.98%;
  right: 10.58%;
  font: {
    family: $content-font;
    style: normal;
    size: 16px;
  }
  display: flex;
  align-items: center;
}

.content-box {
  position: absolute;
  width: 416px;
  height: 158px;
  left: 0;
  top: 0;
  background: $content-background;
}

.photo-md {
  position: absolute;
  height: 126px;
  width: 126px;
  left: 16px;
  top: 16px;
}

.content-title {
  @extend %content-text;
  top: 12.03%;
  bottom: 46.84%;
  font: {
    weight: bold;
  }
  line-height: 24px;
  color: $dark-blue;
}

.content-sub {
  @extend %content-text;
  top: 63.29%;
  bottom: 22.78%;
  font: {
    weight: normal;
  }
  line-height: 36px;
  color: rgba(0, 0, 0, 0.56);
}

.content-arrow {
  position: absolute;
  left: 91.95%;
  right: 4.16%;
  top: 40.51%;
  bottom: 40.51%;
}
</style>
