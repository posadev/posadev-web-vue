<template>
  <div>
    <div v-for="item in orderedItems" v-bind:key="item.name">
      <TicketItem :item="item" />
    </div>
  </div>
</template>
<script lang="ts">
import TicketItem from '@/components/TicketItem';
import mockTicket from '@/mocks/mockTicket.js';

export default {
  name: 'TicketScreen',
  components: { TicketItem },

  data() {
    return {
      items: mockTicket
    };
  },
  computed: {
    orderedItems() {
      const orderTicket = this.items.slice().sort((a, b) => {
        return a.price - b.price;
      });
      return orderTicket;
    }
  }
};
</script>
