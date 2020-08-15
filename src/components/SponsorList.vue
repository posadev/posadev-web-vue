<template>
  <div>
    <div v-for="item in items" v-bind:key="item.name">
      <SponsorItem :item="item" />
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
      items: MockList
    };
  }
};
</script>
<style>
.home > img {
  width: 50%;
}
</style>
