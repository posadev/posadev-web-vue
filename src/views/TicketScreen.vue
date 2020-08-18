<template>
  <div>
    <div v-for="item in orderedItems" v-bind:key="item.name">
      <TicketCardItem :item="item" />
    </div>
  </div>
</template>
<script>
import TicketCardItem from '@/components/TicketCard';
import mockTicket from '../components/mockTicket';

export default {
  name: 'TicketScreen',
  components: {
    TicketCardItem,
  },
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
  },
};
</script>
