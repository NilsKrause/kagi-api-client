import {KagiApiVersion, KagiFastGPTParameter, KagiSearchParameter, KagiSummarizeSharedParameter} from './request';

export type SearchOptions = Omit<KagiSearchParameter, 'q'>
export type FastGPTOptions = Omit<KagiFastGPTParameter, 'query'>
export type SummarizerOptions = KagiSummarizeSharedParameter

export type Settings = {
  // The Kagi API token to use
  token: string,
  // The Kagi API Version to use
  version?: KagiApiVersion
  // Defaults to use  for summarize requests
  summarizerDefaults?: SummarizerOptions
  // Defaults to use for search requests
  searchDefaults?: SearchOptions
  // Defaults to use for FastGPT requests
  fastGPTDefaults?: FastGPTOptions
}

