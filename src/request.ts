export type KagiApiVersion = typeof KAGI_API_VERSIONS[keyof typeof KAGI_API_VERSIONS];
export const KAGI_API_VERSIONS = {
  v0: 'v0'
} as const;

export const KAGI_BASE_API_URL = "https://kagi.com/api";

// ==== SEARCH ====
export const KAGI_SEARCH_ENDPOINT = "search"
export type SearchAllowedMethods = "GET"

export type KagiSearchParameter = {
  // The query to search for
  q: string
  // limit number of Search Result items
  limit?: number
}

// ==== SUMMARIZER ====

export const KAGI_SUMMARIZER_ENDPOINT = "summarize"
export type SummarizeAllowedMethods = "GET" | "POST"
export type KagiSummarizeParameter = KagiSummarizeTextParameter | KagiSummarizeUrlParameter
export interface KagiSummarizeTextParameter extends KagiSummarizeSharedParameter {
  // Text to summarize. Exclusive with url.
  text: string
}

export interface KagiSummarizeUrlParameter extends KagiSummarizeSharedParameter {
  // A URL to a document to summarize. Exclusive with text.
  url: string
}

export type KagiSummarizeSharedParameter = {
  // Summarization engine
  engine?: KagiSummarizeEngine
  // Type of summary
  summary_type?: KagiSummarizeType
  // Desired output language
  target_language?: KagiSummarizeLanguage
  // Whether to allow cached requests & responses. (default is true)
  cache?: boolean
}

// Different summarization engines are provided that will give you choices over the "flavor" of the summarization text.
// See: https://help.kagi.com/kagi/api/summarizer.html#summarization-engines
export type KagiSummarizeEngine = 'cecil' | 'agnes' | 'daphne' | 'muriel';

// Different summary types are provided that control the structure of the summary output.
// See: https://help.kagi.com/kagi/api/summarizer.html#summary-types
export type KagiSummarizeType = 'summary' | 'takeaway';

// The summarizer can translate the output into a desired language, using the table of supported language codes below.
//
// If no language is specified, the document's original language is allowed to influence the summarizer's output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.
//
// For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying "EN" will ensure all passages are translated as English.
// See: Different summarization engines are provided that will give you choices over the "flavor" of the summarization text.
export type KagiSummarizeLanguage = typeof KAGI_SUMMARIZE_LANGUAGES[keyof typeof KAGI_SUMMARIZE_LANGUAGES];

export const KAGI_SUMMARIZE_LANGUAGES = {
  Bulgarian: 'BG',
  Czech: 'CS',
  Danish: 'DA',
  German: 'DE',
  Greek: 'EL',
  English: 'EN',
  Spanish: 'ES',
  Estonian: 'ET',
  Finnish: 'FI',
  French: 'FR',
  Hungarian: 'HU',
  Indonesian: 'ID',
  Italian: 'IT',
  Japanese: 'JA',
  Korean: 'KO',
  Lithuanian: 'LT',
  Latvian: 'LV',
  Norwegian: 'NB',
  Dutch: 'NL',
  Polish: 'PL',
  Portuguese: 'PT',
  Romanian: 'RO',
  Russian: 'RU',
  Slovak: 'SK',
  Slovenian: 'SL',
  Swedish: 'SV',
  Turkish: 'TR',
  Ukrainian: 'UK',
  Chinese: 'ZH',
  ChineseSimplified: 'ZH',
  ChineseTraditional: 'ZH-HANT',
} as const;

// ==== FASTGPT ====
export const KAGI_FASTGPT_ENDPOINT = "fastgpt"
export type KagiFastGPTParameter = {
  // A query to be answered.
  query: string
  // Whether to allow cached requests & responses. (default true)
  cache?: boolean
  // deprecated
  // Whether to perform web searches to enrich answers (default true)
  web_search?: boolean
}

// ==== ENRICHMENT ===
export const KAGI_ENRICHMENT_ENDPOINT = "enrich"
export const KAGI_ENRICHMENT_WEB = "web"
export const KAGI_ENRICHMENT_NEWS = "news"
export type KagiEnrichmentType = 'web' | 'news'

export type KagiEnrichmentParameter = {
  // The query to enrich
  q: string
}
