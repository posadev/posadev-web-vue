<template>
  <div class="containerSponsor">
    <div v-for="sponsor in sponsors" v-bind:key="sponsor.name">
      <SponsorItem :sponsor="sponsor" />
    </div>
  </div>
</template>

<script>
import SponsorItem from '@/components/SponsorItem';
import MockList from '@/components/ms';

export default {
  name: 'SponsorList',
  components: {
    SponsorItem
  },
  data() {
    return {
      sponsors: MockList
    };
  }
};
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
