<template>
  <div>
    <CommunityCard
      v-for="(community, index) in this.communities"
      v-bind:communityInfo="community"
      v-bind:key="community.name"
      :isOdd="index % 2 !== 0"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Community from '@/data/Community.model'
import CommunityCard from '@/components/CommunityCard.vue';
import CommunityService from '@/services/CommunityService';

@Component({
  components: {
    CommunityCard
  }
})
export default class CommunitySection extends Vue {
  private communities: Community[] = [];
  private communityService!: CommunityService;
  mounted() {
    this.communityService = new CommunityService();
    this.communities = this.communityService.findAll();
  }
}
</script>

<style lang="scss"></style>
