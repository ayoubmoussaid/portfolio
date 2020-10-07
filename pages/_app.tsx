import '../styles/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Moussaid Ayoub</title>
      <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Josefin+Sans:wght@700&family=Dr+Sugiyama&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
    </>
}

export default MyApp
