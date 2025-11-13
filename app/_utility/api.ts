/**
 * A safe API helper:
 * - Handles HTTP errors
 * - Handles invalid JSON
 * - Handles null JSON
 * - Handles API logic failures (success: false)
 * - Returns typed data or null
 */

export async function apiFetch<T>(url: string): Promise<T | null> {
  // FETCH (network + HTTP errors)
  const res = await fetch(url)

  if (!res.ok) {
    console.error("HTTP Error:", res.status, res.statusText)
    return null
  }

  // SAFE JSON PARSE
  let json: any
  try {
    json = await res.json()
  } catch (err) {
    console.error("Response is not valid JSON:", err)
    return null
  }

  // JSON IS NULL
  if (json == null) {
    console.error("JSON is null or undefined")
    return null
  }

  // API LOGIC FAILED (if your API uses success/error)
  if (json.success === false) {
    console.error("API logic error:", json.error)
    return null
  }

  // RETURN EITHER json.data OR JUST json
  return (json.data ?? json) as T
}
