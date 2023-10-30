import { admin } from './vertical'
import type { HorizontalNavItems, VerticalNavItems } from '@/@layouts/types'
import { useUserStore } from '@/stores/user'

export default function useNavigation(): VerticalNavItems | HorizontalNavItems {
  const auth = useUserStore()

  return admin
}
