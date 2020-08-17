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

<script lang="ts">
import AuthButton from '@/components/AuthButton.vue';
import Auth from '@/components/Auth.model';
import firebase from 'firebase';
import ExternalLinkButton from '../components/ExternalLinkButton';
import external from '@/components/ExternalLink.model';

export default {
  name: 'Home',
  components: { ExternalLinkButton, AuthButton },
  computed: {
    googleProvider: function() {
      return new Auth(new firebase.auth.GoogleAuthProvider(), 'Google');
    },
    microsoftProvider: function() {
      return new Auth(
        new firebase.auth.OAuthProvider('microsoft'),
        'Microsoft'
      );
    },
    facebookProvider: function() {
      return new Auth(new firebase.auth.FacebookAuthProvider(), 'Facebook');
    },
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
  },
  data() {
    return {
      nameUser: ''
    };
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
