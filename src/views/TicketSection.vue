<template>
  <div class="section">
    <div class="columns">
      <TicketCard
        class="column col-lg-4 col-md-8 col-sm-10 col-xs-12"
        v-for="item in orderedItems"
        v-bind:key="item.name"
        :ticket="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicketCard from '@/components/TicketCard.vue';
import Title from '@/components/Title.vue';
import Ticket from '@/data/Ticket.model';
import mockArray from '@/mocks/tickets.mock';

@Component({
  components: { TicketCard, Title }
})
export default class TicketSection extends Vue {
  get orderedItems(): Ticket[] {
    return mockArray;
  }
}
</script>

<style lang="scss">
@import '~spectre.css/src/_variables';
@import '~spectre.css/src/_layout';
@import '../styles/_variables.scss';

.section {
  height: 600px;
  padding-top: 5rem;
}
.columns {
  padding: 0;
  margin: 0;
  align-items: center;
}
.column {
  padding-left: 4rem;
  padding-right: 4rem;
}

.title {
  padding-bottom: 3rem;
}
</style>
