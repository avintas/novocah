const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_BASE_URL ?? "";

/**
 * Builds a public URL for a media asset stored in the Vercel Blob store.
 * Media files are named numerically, e.g. `1059.webp`.
 */
export function mediaUrl(id: string | number): string {
  return `${BLOB_BASE_URL}/${id}.webp`;
}

/** Named brand assets mapped to their blob ids. */
export const brandAssets = {
  logo: { id: 1059, width: 1024, height: 1536 },
  jointCommissionSeal: { id: 1061, width: 1024, height: 1024 },
} as const;
