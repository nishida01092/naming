import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import '../styles/globals.css';
import '../styles/sp.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
