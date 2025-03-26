export enum StatusEnum {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  unknown = 'unknown',
}

export interface CharacterLocation {
  name: string
  url: string
}

interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export interface CharacterFilter {
  name?: string
  type?: string
  species?: string
  status?: StatusEnum
  gender?: GenderEnum
  page?: number
}

export interface LocationFilter extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
  dimension?: string
}

export interface EpisodeFilter extends Pick<CharacterFilter, 'name' | 'page'> {
  episode?: string
}

export interface Character extends ResourceBase {
  status: StatusEnum
  species: string
  type: string
  gender: GenderEnum
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}

export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}

export interface Episode extends ResourceBase {
  air_date: string
  episode: string
  characters: string[]
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharactersByPage {
  info: Info
  results: Character[]
}

export interface Episodes {
  info: Info
  results: Episode[]
}

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

export interface CharacterInfoListProp {
  status: string
  species: string
  type: string
  gender: string
}

export interface LocationProp extends Pick<CharacterLocation, 'name'> {
  id: string
}
