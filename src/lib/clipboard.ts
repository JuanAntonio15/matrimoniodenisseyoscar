export interface CopyResult {
  success: boolean;
}

/**
 * Wraps navigator.clipboard.writeText, resolving to a result object instead
 * of throwing — callers (e.g. the gift section's copy button) render
 * different UI for the unsupported/denied case rather than crashing.
 */
export async function copyToClipboard(text: string): Promise<CopyResult> {
  if (!navigator.clipboard) {
    return { success: false };
  }

  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch {
    return { success: false };
  }
}
