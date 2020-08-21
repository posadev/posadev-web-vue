<template>
  <div class="columns workshop-items">
    <WorkshopCard
      class="column col-lg-4 col-md-8 col-sm-10 col-xs-12 workshop-item"
      v-for="workshop in workshops"
      v-bind:info="workshop"
      v-bind:key="workshop.name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkshopInfo from '@/data/WorkshopInfo.model';
import ActionButton from '@/components/ActionButton.vue';
import WorkshopCard from '@/components/WorkshopCard.vue';
import workshopMocks from '@/mocks/Workshops.mock';

@Component({
  components: { ActionButton, WorkshopCard }
})
export default class Workshops extends Vue {
  get workshops(): WorkshopInfo[] {
    return workshopMocks;
  }
}
</script>

<style lang="scss">
@import '../../node_modules/spectre.css/src/variables';

@import '../styles/variables';
@import '../../node_modules/spectre.css/src/layout';

.section-workshops {
  display: flex;
  flex-direction: column;
  background: $primary-color;
}

.workshop-items {
  justify-content: center;
}

.workshop-item {
  margin: {
    top: 1%;
    bottom: 1%;
  }
}

.btn-see-all {
  align-self: center;
}
</style>
