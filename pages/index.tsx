import Head from 'next/head'
import Image from 'next/image'
import Tooltip from '../components/elements/Tooltip'
import { Tweet } from '@/components/elements/twitter/Tweet'

export default function Home() {
  return (
    <>
      <Head>
        <title>新キャラクターの名前を募集！</title>
        <meta name="description" content="シテモイに新しい仲間が加わりました。お互いを知り、もっとドキドキワクワクな毎日が待っています。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <div id="naming" className="naming">
        <header><h1>新キャラクター登場！</h1></header>
        <main>
          <section className="top">
            <Image
              src="/../public/img_top.png"
              layout="responsive"
              width={375}
              height={451}
              alt="topimage"
            />
          </section>
          <section className="banner">
            <Image
              src="/../public/img_banner01.png"
              width={282}
              height={79}
              alt="banner"
            />
          </section>
          <section className="notice">
            <Image
              src="/../public/img_unknown.png"
              width={250}
              height={250}
              alt="unknown"
            />
            <h2>仲間が増えれば<br/>今日は<br/>もっとワクワク！</h2>
            <Tooltip tooltipId={1} />
            <p>シテモイ<span id="1" className="tipIcon" onClick={showTooltip}>?</span>に<br/>新しい仲間が来てくれた！<br />
               なんて呼べばいいかな。<br />
               「いっせーのーで」で言うよ。<br />
               みんな、準備はいいかい？ 
            </p>
          </section>
          <section className="schedule">
            <h2>スケジュール</h2>
            <dl>
              <dt>募集期間</dt>
              <dd>４月９日（日）１１：００から</dd>
              <dd>４月２３日（日）１２：００まで</dd>
            </dl>
            <dl>
              <dt>速報／発表</dt>
              <dd>
                <dl>
                  <dt>速報</dt>
                  <dd>:twitterで随時更新中！</dd>
                </dl>
              </dd>
              <dd>
                <dl>
                  <dt>結果発表</dt>
                  <dd>:２０２３年４月３０日（日）</dd>
                </dl>
              </dd>
            </dl>
          </section>
          <section className="posting">
            <h2>応募はここから！</h2>
            <Tweet/>
          </section>
        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}
