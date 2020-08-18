<template>
  <div class="sponsor" @click="goToLink()">
    <p>{{ this.sponsor.name }}</p>
    <img :src="this.sponsor.pic" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sponsor from '@/components/Sponsor.model';

@Component
export default class SponsorItem extends Vue {
  @Prop() private sponsor!: Sponsor;

  private goToLink(): void {
    window.open(this.sponsor.url);
  }
}
</script>
<style lang="scss">
.sponsor {
  width: 100px;
  img {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .sponsor {
    width: 135px;
  }
}
</style>
