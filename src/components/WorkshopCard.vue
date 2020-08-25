<template>
  <div class="workshop" @click="onClick">
    <img
      class="photo-md"
      :src="this.workshop.photoURL"
      alt="Foto del instructor"
    />
    <div class="workshop-info">
      <p class="workshop-title">{{ this.workshop.name }}</p>
      <p class="workshop-sub">{{ this.workshop.speakerName }}</p>
    </div>
    <img
      class="workshop-arrow"
      src="../assets/right-arrow-vector.png"
      alt="Mas información"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import WorkshopInfo from '@/data/WorkshopInfo.model';

@Component
export default class WorkshopCard extends Vue {
  @Prop({ required: true }) private workshop!: WorkshopInfo;

  @Emit('workshop-click')
  private onClick() {
    return this.workshop;
  }
}
</script>

<style lang="scss">
.workshop {
  width: 416px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
}

.photo-md {
  width: 126px;
  height: 126px;
}

.workshop-info {
  text-align: start;
}
</style>
