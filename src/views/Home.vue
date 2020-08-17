<template>
  <div class="home">
    <img
      id="commingSoonImage"
      alt="coming soon"
      src="../assets/proximamente.png"
    />
    <div class="external-buttons">
      <ExternalLinkButton class="btn" :external="urlSponsor" />
      <ExternalLinkButton class="btn" :external="urlSpeaker" />
    </div>
  </div>
</template>

<script>
import ExternalLinkButton from '../components/ExternalLinkButton';
import external from '@/components/ExternalLink.model';
export default {
  name: 'Home',
  components: { ExternalLinkButton },

  computed: {
    urlSponsor: function() {
      return this.createURL(
        'https://docs.google.com/document/d/1zWYvQ3RUKzu1ohTfcbYYdzQZd-0_YhgStFIWUEGFrRY/edit?usp=sharing',
        'Sponsors'
      );
    },
    urlSpeaker: function() {
      return this.createURL(
        'https://convoca.dev/jconf-mexico-2020/cfp',
        'Speakers'
      );
    }
  },
  methods: {
    createURL: (url, description) => {
      return new external(url, description);
    }
  }
};
</script>

<style lang="scss">
.home > img {
  width: 50%;
}

.external-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
