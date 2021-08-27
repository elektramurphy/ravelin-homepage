import Head from 'next/head'
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const ClientRole = dynamic(() => import("../src/components/homepage/clientRole"));
const Solutions = dynamic(() => import("../src/components/homepage/solutions"));
import Hero from '../src/components/homepage/hero'
import Link from "next/link";

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <div>
      <Head>
        <title>Ravelin - Make Smarter Decisions</title>
        <meta name="description" content="Target the specific fraud issues you’re facing with a solution built around your business. Manage fraud and boost conversion with the accuracy of machine learning." />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/font/sf-mono/SFMono.woff"
            as="font"
            crossOrigin=""
          />
      </Head>

      <div className="pb-24 md:pb-36">
        <Hero />
        <div
          className="px-10"
          ref={observe}>
          {inView &&
            <ClientRole />
          }
          <div
            ref={observe}>
            {inView &&
              <Solutions />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
