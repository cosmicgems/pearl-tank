import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/layout/layout'
import { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap';
import { Share_Tech } from '@next/font/google';
import Footer from '../components/footer/footer';

const coda = Share_Tech({
    subsets: ['latin'],
    weight: '400'
})


function MyApp({ Component, pageProps}) {
    return(
        <main className={coda.className}>
            <Layout>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <style>
  @import url(`&#39;`https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Coda+Caption&family=Play:wght@400;700&display=swap`&#39;`);
</style>
            </Head>
            <Component {...pageProps} />
        </Layout>
        </main>
        
    )
}

export default MyApp;