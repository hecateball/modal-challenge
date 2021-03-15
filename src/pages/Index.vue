<template>
  <img alt="Vue logo" src="/~/assets/logo.png" />
  <button @click="visible = true">モーダルを開く</button>
  <teleport to="#modal">
    <div v-if="visible" class="overlay" @click="visible = false">
      <section class="modal" @click.stop>
        <h2>もーだる</h2>
        <button @click="visible = false">モーダルを閉じる</button>
      </section>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup: () => {
    const visible = ref<boolean>(false)
    return {
      visible,
    }
  },
})
</script>

<style scoped>
.overlay {
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal {
  width: 40vw;
  height: 30vw;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(196, 196, 196, 1);
}
</style>
