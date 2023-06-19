export const enum StatusEnum {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export const enum GenderEnum {
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

export interface LocationFilter
  extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
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

export interface ApiResponse<T> {
  /** The HTTP status code from the API response */
  status: number
  /** The HTTP status message from the API response */
  statusMessage: string
  /** The response that was provided by the API */
  data: T
}

export interface Info<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number
    /** The amount of pages */
    pages: number
    /** Link to the next page (if it exists) */
    next: string | null
    /** Link to the previous page (if it exists) */
    prev: string | null
  }
  results?: T
}
