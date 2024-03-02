import type { CharacterLocation } from '~/stores/types'

export interface NavItem {
  name: string
  path: string
}

export interface NavListProps {
  list: NavItem[]
}

export interface NavItemProps {
  item: NavItem
}

export interface LocationProp extends Pick<CharacterLocation, 'name'> {
  id: string
}
