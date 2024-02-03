# Kagi API client

A client for the [Kagi API](https://help.kagi.com/kagi/api/overview.html), written in typescript.

## Usage

```typescript
const settings = {token: '<KAGI_API_TOKE>'}
const kagi = new Kagi(settings);

let summarizeResult = kagi.summarize('<URL_OR_TEXT>');
let searchResult = kagi.search('<SEARCH_TERM>');
let fastGPTResult = kagi.fastgpt('<PROMPT>');
let enrichWebResult = kagi.enrichWeb('<URL_TO_ENRICH>');
let enrichNewsResult = kagi.enrichNews('<URL_TO_ENRICH>');
```

### Settings

```typescript
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
```

### Response

```typescript
type KagiResponse<KagiDataT extends KagiData> = {
  // Request Metadata
  meta: KagiMeta
  // Response data. Can be any valid JSON value, as documented
  data: KagiDataT
  // Error Object, if an error occurred
  error: KagiErrorT[]
}
```

Please refer to the type definitions and the Kagi documentation for further information.

## Costs

Please refer to the Kagi API documentation for an detailed explanation about costs. 
Also please not that the Search API is currently in closed beta and only available to the Kagi Business (team) plan.
