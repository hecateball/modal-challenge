<template>
  <div class="modal" @click.stop>
    <h2>{{ name }}</h2>
    <button @click="dismiss">閉じる</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useModal } from '~/composables/modal'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const { dismiss } = useModal(props.name)
</script>

<style scoped>
.modal {
  width: 80vw;
  height: 60vh;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(196, 196, 196, 1);
}
</style>
