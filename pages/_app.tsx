import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { usePostHog } from 'next-use-posthog'

function MyApp({ Component, pageProps }: AppProps) {
  const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_API_KEY;
  // @ts-ignore
  usePostHog(POSTHOG_API_KEY, { api_host: 'https://app.posthog.com' })
  return <Component {...pageProps} />
}

export default MyApp
