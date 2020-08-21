<template>
  <div class="section-workshops">
    <!-- Title/subtitle component -->
    <h1>Aqui va un componente con titulo</h1>
    <h2>Aqui va un componente con subtitulo</h2>

    <Workshops />

    <ActionButton
      class="btn-see-all"
      :info="this.seeAllInfo"
      v-on:button-action="showAllWorkshops"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Workshops from '@/components/Workshops.vue';
import ActionButton from '@/components/ActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: { Workshops, ActionButton }
})
export default class WorkshopSection extends Vue {
  private seeAllInfo = new ButtonInfo('Ver todos los workshops');

  private showAllWorkshops() {
    //TODO
  }
}
</script>

<style lang="scss"></style>
