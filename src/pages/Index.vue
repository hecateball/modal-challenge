<template>
  <img alt="Vue logo" src="/~/assets/logo.png" />
  <button @click="show" :disabled="modals.length === 0">モーダルを開く</button>
  <button @click="createModal(`Modal${modals.length + 1}`)">
    モーダルを追加
  </button>
  <div v-for="modal in modals">
    <label :for="modal.name">{{ modal.name }}</label>
    <input :id="modal.name" type="checkbox" v-model="modal.active" />
  </div>
  <teleport to="#modal">
    <div v-if="visible" class="overlay" @click="dismiss">
      <template v-for="modal in modals">
        <ModalWindow class="center" v-if="modal.visible" :name="modal.name" />
      </template>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useCreateModal, useModals } from '~/composables/modal'
import { useOverlay } from '~/composables/overlay'
import ModalWindow from '~/components/ModalWindow.vue'

const { modals, show } = useModals()
const { visible, dismiss } = useOverlay()
const { createModal } = useCreateModal()
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
  backdrop-filter: blur(5px);
}

.overlay > .center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
