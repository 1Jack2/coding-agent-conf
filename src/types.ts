// API request/response types - shared between client and server

export interface ServeOptions {
  port?: number;
  headless?: boolean;
  cdpPort?: number;
  /** Directory to store persistent browser profiles (cookies, localStorage, etc.) */
  profileDir?: string;
}

export interface GetPageRequest {
  name: string;
}

export interface GetPageResponse {
  wsEndpoint: string;
  name: string;
  targetId: string; // CDP target ID for reliable page matching
}

export interface ListPagesResponse {
  pages: string[];
}

export interface ServerInfoResponse {
  wsEndpoint: string;
}

// LLM Tree API types

export interface GetLLMTreeResponse {
  /** Formatted tree string in browser-use format */
  tree: string;
  /** Version counter for the selector map */
  version: number;
  /** Number of interactive elements in the tree */
  elementCount: number;
}

export interface GetSelectorResponse {
  /** The element index that was requested */
  index: number;
  /** CSS selector for the element */
  selector: string;
  /** CDP backend node ID for the element */
  backendNodeId: number;
}
