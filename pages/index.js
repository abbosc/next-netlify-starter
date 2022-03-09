import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abbos Mavlonov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Abbos Mavlonov" />
        <p className="description">
          Coming soon! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
