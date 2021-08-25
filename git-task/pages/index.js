import Head from 'next/head'
import ClientRole from '../src/components/homepage/clientRole'
import Solutions from '../src/components/homepage/solutions'
import Hero from '../src/components/homepage/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ravelin - Make Smarter Decisions</title>
        <meta name="description" content="Target the specific fraud issues you’re facing with a solution built around your business. Manage fraud and boost conversion with the accuracy of machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-24 md:pb-36">
        <Hero />
        <div className="px-10">
        <ClientRole />
        <Solutions />
        </div>
      </div>
    </div>
  )
}
