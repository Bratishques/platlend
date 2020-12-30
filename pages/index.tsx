import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`w-full`}>
        
        <section className={`h-screen w-full bg-green-500`}>
          <Header/>
        </section>
        <section className={`h-screen w-full bg-purple-500`}></section>
      </main>
    </div>
  );
}
