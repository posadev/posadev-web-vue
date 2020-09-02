<template>
  <button v-on:click="authSocialMedia()" class="button-auth">
    Sign in with {{ this.model.name }}
  </button>
</template>

<script lang="ts">
import * as firebase from 'firebase/app';
import { Component, Prop, Vue } from 'vue-property-decorator';
import AuthModel from '@/data/Auth.model';
import { auth } from '@/firebase';
import UserCredential = firebase.auth.UserCredential;

@Component
export default class AuthButton extends Vue {
  @Prop() private model!: AuthModel;

  private authSocialMedia(): void {
    auth
      .signInWithPopup(this.model.provider)
      .then((userCredential: UserCredential) => {
        this.$emit('value', userCredential?.user?.displayName);
        this.$emit('locale', userCredential?.additionalUserInfo);
      });
  }
}
</script>

<style lang="scss">
.button-auth {
  padding: 1em;
  margin: 1em;
  background-color: black;
  color: white;
  border-width: 1px;
}
</style>
