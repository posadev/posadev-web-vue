<template>
  <div>
    <div>
      <span>{{ this.item.name }}</span>
      <span>{{ this.item.price }}</span>
      <span>{{ this.item.start }}</span>
      <span>{{ this.item.end }}</span>
    </div>
    <div>
      <!-- <ExternalLinkButton {{ this.item.url }} /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ticketCard from '@/components/ticketCard.model';

@Component
export default class TicketCardItem extends Vue {
  @Prop() private item!: ticketCard;
}
</script>
