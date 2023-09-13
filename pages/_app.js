import Container from '@/components/Container'
import Header from '@/components/Header'
import { ThemeProvider } from '@/lib/ThemeContext'
import '@/styles/global.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <tilte>Codeitmall</tilte>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
