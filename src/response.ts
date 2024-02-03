export type KagiResponse<KagiDataT extends KagiData> = {
  // Request Metadata
  meta: KagiMeta
  // Response data. Can be any valid JSON value, as documented
  data: KagiDataT
  // Error Object, if an error occurred
  error: KagiErrorT[]
}

export type KagiMeta = {
  id: string,
  node: string,
  ms: number
}

export type KagiErrorT = {
  code: number,
  msg: string,
  ref: null
}

export type KagiData = KagiSummarizerData | KagiFastGPTData | KagiSearchData;

export type KagiSummarizerData = {
  // Summarization output
  output: string
  // Amount of tokens processed
  tokens: number
}

export type KagiFastGPTReferenceObject = {
  // Title of the referenced search result.
  title: string
  // Snippet of the referenced search result.
  snippet: string
  // URL of the referenced search result.
  url: string
}

export type KagiFastGPTData = {
  // Answer output
  output: string,
  // The search results that are referred in the answer.
  references?: KagiFastGPTReferenceObject[]
  // Amount of tokens processed
  tokens: number
}

export type KagiSearchThumbnail = {
  // proxied image URL
  url: string
  // Image height
  height: number
  // Image width
  width: number
}

export type KagiSearchData = KagiSearchDataEntry[]

export type KagiSearchDataEntry = KagiSearchResult | KagiSearchRelated

export type KagiSearchResult = {
  // Type 0 for search result
  t: 0
  //	Result rank
  rank:	number
  // URL to the result
  url: string
  // Result title
  title: string
  // Result snippet
  snippet?: string
  // When the result was published, if known
  published?: string
  // An image associated with the result
  thumbnail: KagiSearchThumbnail
}

export type KagiSearchRelated = {
  // Type 1 for related searches
  t: 1
  // Related search terms
  list: string[]
}

export interface IKagiError extends Error {
  url: string
  request: RequestInit
  response: Response
  kagiErrors?: KagiErrorT[]
}

export class KagiError extends Error implements IKagiError {
  url: string
  request: RequestInit
  response: Response
  kagiErrors?: KagiErrorT[]

  constructor(url: string, request: RequestInit, response: Response, kagiErrors?: KagiErrorT[], message?: string) {
    super(message)
    this.url = url
    this.request = request
    this.response = response
    this.kagiErrors = kagiErrors
  }
}
