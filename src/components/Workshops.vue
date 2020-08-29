<template>
  <div class="columns workshop-items">
    <WorkshopCard
      class="column col-2 col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12 workshop-item"
      v-for="workshop in workshops"
      v-bind:workshop="workshop"
      v-bind:key="workshop.name"
      v-on:workshop-click="onWorkshopClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import WorkshopInfo from '@/data/WorkshopInfo.model';
import WorkshopCard from '@/components/WorkshopCard.vue';
import workshopMocks from '@/mocks/Workshops.mock';

@Component({
  components: { WorkshopCard }
})
export default class Workshops extends Vue {
  private get workshops(): WorkshopInfo[] {
    return workshopMocks;
  }

  @Emit('workshop')
  private onWorkshopClick(workshop: WorkshopInfo): WorkshopInfo {
    return workshop;
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/layout';

.section-workshops {
  display: flex;
  flex-direction: column;
  background: $primary-color;
}

.workshop-items {
  justify-content: center;
}

.workshop-item {
  margin: 1%;
}

.btn-see-all {
  align-self: center;
}
</style>
