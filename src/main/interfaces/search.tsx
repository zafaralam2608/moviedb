export interface SearchMultiResults {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface SearchMulti {
  page: number
  results: SearchMultiResults[]
  total_pages: number
  total_results: number
}
