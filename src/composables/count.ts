import { ref, readonly } from 'vue'

export const useCount = () => {
  const count = ref<number>(0)
  const setCount = (value: number) => {
    count.value = value
  }
  return { count: readonly(count), setCount }
}
