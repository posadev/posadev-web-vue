<template>
  <div>
    <div v-for="item in orderedItems" v-bind:key="item.name">
      <TicketCardItem :item="item" />
      <!-- <ExternalLinkButton :external="urlEvent" /> -->
    </div>
  </div>
</template>
<script>
import TicketCardItem from '@/components/TicketCard';
// import external from '@/components/ExternalLink.model';
import mockTicket from '../components/mockTicket';
// import ExternalLinkButton from '../components/ExternalLinkButton';

export default {
  name: 'TicketScreen',
  components: {
    TicketCardItem
    //ExternalLinkButton
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
  }
  // urlEvent: function() {
  //   return this.createURL('https://www.eventbrite.com.mx/', 'Comprar ahora');
  // },

  // methods: {
  //   createURL: (url, description) => {
  //     return new external(url, description);
  //   }
  // }
};
</script>
