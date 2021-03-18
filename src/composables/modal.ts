import {
  ref,
  reactive,
  watchEffect,
  inject,
  provide,
  Ref,
  InjectionKey,
} from 'vue'
import { useOverlay } from '~/composables/overlay'

export type Modal = {
  name: string
  active: boolean
  visible: boolean
  show: () => void
  dismiss: () => void
}

const Modals: InjectionKey<Ref<Modal[]>> = Symbol()

export const useProvideModals = () => {
  const provideModals = () => {
    const modals = ref<Modal[]>([])
    provide(Modals, modals)
    return { modals }
  }
  return { provideModals }
}

export const useModals = () => {
  const modals = inject(Modals)
  if (modals === undefined) {
    throw new Error()
  }
  const show = () => {
    modals.value
      .filter((modal) => modal.active)
      .forEach((modal) => modal.show())
  }
  return {
    modals,
    show,
  }
}

export const useModal = (name: string) => {
  const { modals } = useModals()
  const modal = modals.value.find((modal) => modal.name === name)
  if (modal === undefined) {
    throw new Error()
  }
  //　オーバーレイを非表示にするときにモーダルも非表示にする
  const { visible } = useOverlay()
  watchEffect(() => {
    if (!visible.value) {
      modal.dismiss()
    }
  })
  return modal
}

export const useCreateModal = () => {
  const modals = inject(Modals)
  if (modals === undefined) {
    throw new Error()
  }
  const createModal = (name: string) => {
    const modal: Modal = reactive<Modal>({
      name,
      active: true,
      visible: false,
      show: () => (modal.visible = true),
      dismiss: () => (modal.visible = false),
    })
    modals.value.push(modal)
    return modal
  }
  return { createModal }
}
