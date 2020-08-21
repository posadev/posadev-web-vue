<template>
  <div>
    <div class="workshop">
      <img
        class="photo-md"
        :src="this.info.photoURL"
        alt="Foto del instructor"
      />
      <div class="workshop-info">
        <p class="workshop-title">{{ this.info.name }}</p>
        <p class="workshop-sub">{{ this.info.speakerName }}</p>
      </div>
      <img
        class="workshop-arrow"
        src="../assets/right-arrow-vector.png"
        alt="Mas información"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkshopInfo from '@/data/WorkshopInfo.model';

@Component
export default class WorkshopCard extends Vue {
  @Prop({ required: true }) private info!: WorkshopInfo;
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
</style>
