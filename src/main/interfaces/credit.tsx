export interface Cast {
  adult: boolean
  gender: number
  id: 11288
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: 11288
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  department: string
  job: string
}

export interface Credits {
  cast: Cast[]
  crew: Crew[]
}

export interface Credits0 extends Credits {
  id: number
}
