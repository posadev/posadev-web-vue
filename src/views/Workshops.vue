<template>
  <div class="section-workshops">
    <!--    Title/subtitle element-->
    <h1>Aqui va un componente con titulo</h1>
    <h2>Aqui va un componente con subtitulo</h2>
    <!--    Title/subtitle element-->
    <div class="columns workshop-items">
      <WorkshopCard
        class="column col-2 col-lg-3 col-md-8 col-sm-10 col-xs-12 workshop-item"
        v-for="workshop in workshops"
        v-bind:info="workshop"
        v-bind:key="workshop.name"
      />
    </div>
    <ActionButton
      class="btn-see-all"
      :info="this.seeAllInfo"
      v-on:button-action="loadAllWorkshops"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkshopCard from '@/components/WorkshopCard.vue';
import WorkshopInfo from '@/data/WorkshopInfo.model';
import ActionButton from '@/components/ActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: { ActionButton, WorkshopCard }
})
export default class Workshops extends Vue {
  private seeAllInfo = new ButtonInfo('Ver todos los workshops');

  get workshops(): WorkshopInfo[] {
    const photoUrl = new URL('https://via.placeholder.com/126x126');
    return [
      new WorkshopInfo('Memes para todos1', 'El Joel', photoUrl),
      new WorkshopInfo('Memes para todos2', 'El Joel', photoUrl),
      new WorkshopInfo('Memes para todos3', 'El Joel', photoUrl),
      new WorkshopInfo('Memes para todos4', 'El Joel', photoUrl),
      new WorkshopInfo('Memes para todos5', 'El Joel', photoUrl),
      new WorkshopInfo('Memes para todos6', 'El Joel', photoUrl)
    ];
  }

  private loadAllWorkshops() {
    console.log('Oh look, Im loading a lot of items');
  }
}
</script>

<style lang="scss">
@import 'node_modules/spectre.css/src/variables';

@import '../styles/variables';
@import 'node_modules/spectre.css/src/layout';

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
