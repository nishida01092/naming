import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>新キャラクターの名前を募集！</title>
        <meta name="description" content="シテモイに新しい仲間が加わりました。お互いを知り、もっとドキドキワクワクな毎日が待っています。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <div id="naming">
        <header><h1></h1></header>
        <main>
          <section className="top">
            <Image
              src=""
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              alt=""
            />
          </section>
          <section className="banner">
            <Image
              src=""
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              alt=""
            />
          </section>
          <section className="notice">
            <Image
              src=""
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              alt=""
            />
            <h2></h2>
            <p></p>
          </section>
          <section className="schedule">
            <h2></h2>
            <dl>
              <dt></dt>
              <dd></dd>
              <dd></dd>
            </dl>
            <dl>
              <dt></dt>
              <dd>
                <dl>
                  <dt></dt>
                  <dd></dd>
                </dl>
              </dd>
              <dd>
                <dl>
                  <dt></dt>
                  <dd></dd>
                  </dl>
              </dd>
            </dl>
          </section>
          <section className="posting">
            <h2>応募はここから</h2>
            <p></p>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}
