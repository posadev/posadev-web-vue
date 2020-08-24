<script lang="ts">
import ActionButton from '@/components/ActionButton.vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AccentActionButton extends ActionButton {
  protected customClass = 'accent';
}
</script>

<style lang="scss">
@import '../styles/variables';

.btn {
  .accent {
    background: $accent-color;
  }
}
</style>
