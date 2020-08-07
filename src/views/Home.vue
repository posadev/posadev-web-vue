<template>
  <div class="home">
    <img
      id="commingSoonImage"
      alt="coming soon"
      src="../assets/proximamente.png"
    />
    <ExternalLink
      class="btn"
      :external="{
        url:
          'https://docs.google.com/document/d/1zWYvQ3RUKzu1ohTfcbYYdzQZd-0_YhgStFIWUEGFrRY/edit?usp=sharing',
        description: 'Sponsors'
      }"
      description="Sponsors"
    />
    <ExternalLink
      class="btn"
      :external="{
        url: 'https://convoca.dev/jconf-mexico-2020/cfp',
        description: 'Speakers'
      }"
      description="Speakers"
    />
  </div>
</template>

<script>
import ExternalLink from '../components/External_Link';
export default {
  name: 'Home',
  components: { ExternalLink }
};
</script>

<style lang="scss">
.home > img {
  width: 50%;
}
.btn > button {
  background-color: #9b51e0;
  color: white;
  font-size: 24px;
  padding: 10px;
  border-color: #eb5757;
  cursor: pointer;
}
</style>
