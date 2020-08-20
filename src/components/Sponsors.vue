<template>
  <div class="columns containerSponsor">
    <SponsorItem
      class="column"
      v-for="sponsor in sponsors"
      v-bind:key="sponsor.name"
      :sponsor="sponsor"
    />
  </div>
</template>

<script lang="ts">
import SponsorItem from '@/components/SponsorItem.vue';
import { Component, Vue } from 'vue-property-decorator';
import Sponsor from '../data/Sponsor.model';

@Component({
  components: { SponsorItem }
})
export default class SponsorList extends Vue {
  get sponsors(): Sponsor[] {
    //FIXME: this is obtained from firebase
    return [
      new Sponsor(
        'desc',
        '',
        'IBM',
        new URL('https://via.placeholder.com/196x84'),
        new URL('https://www.ibm.com'),
        {
          twitter: new URL('https://twitter.com')
        }
      ),
      new Sponsor(
        'desc',
        '',
        'IBM',
        new URL('https://via.placeholder.com/196x84'),
        new URL('https://www.ibm.com'),
        {
          twitter: new URL('https://twitter.com')
        }
      )
    ];
  }
}
</script>

<style>
.containerSponsor {
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
