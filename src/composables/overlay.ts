import { ref, inject, provide, watch, readonly, InjectionKey, Ref } from 'vue'
import { Modal } from '~/composables/modal'

export const Overlay: InjectionKey<Ref<boolean>> = Symbol()

export const useProvideOverlay = (modals: Ref<Modal[]>) => {
  const provideOverlay = () => {
    const visible = ref<boolean>(false)
    // １つでも表示中のモーダルがある場合はオーバーレイを表示する
    // すべてのモーダルが非表示になったときにオーバーレイを非表示にする
    watch(
      modals,
      (modals) => {
        visible.value = modals.filter((modal) => modal.visible).length !== 0
      },
      { deep: true }
    )
    provide(Overlay, visible)
    return { visible }
  }
  return { provideOverlay }
}

export const useOverlay = () => {
  const visible = inject(Overlay)
  if (visible === undefined) {
    throw new Error()
  }
  const dismiss = () => {
    visible.value = false
  }
  return {
    visible: readonly(visible),
    dismiss,
  }
}
