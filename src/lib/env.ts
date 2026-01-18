/**
 * Validates required environment variables.
 * Throws an error if any required variable is missing or invalid.
 */
const validateEnv = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  if (!apiUrl) {
    throw new Error(
      'VITE_API_URL is not defined. Please set it in your .env file.'
    )
  }

  try {
    new URL(apiUrl)
  } catch {
    throw new Error(
      `VITE_API_URL is not a valid URL: "${apiUrl}". Please check your .env file.`
    )
  }
}

export default validateEnv
