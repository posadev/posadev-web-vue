<template>
  <div>
    <button :class="socialLink.socialNetwork">Hola</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SocialLink } from '@/data/SocialMedia.type';

@Component
export default class SocialButton extends Vue {
  @Prop({ required: true })
  private socialLink!: SocialLink;
}
</script>

<style lang="scss">
.twitter {
  background: #4c92bd;
}

.facebook {
  background: #1d3461;
}

.github {
  background: black;
}

.linkedin {
  background: #42b983;
}

.instagram {
  background: hotpink;
}
</style>
