import Head from 'next/head'
import Image from 'next/image'
import Tooltip from '../components/elements/Tooltip'

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
        <header><h1>新キャラクター登場！</h1></header>
        <main>
          <section className="top">
            <Image
              src="/../public/img_top.png"
              width={375}
              height={451}
              alt=""
            />
          </section>
          <section className="banner">
            <Image
              src="/../public/img_banner01.png"
              width={282}
              height={79}
              alt=""
            />
          </section>
          <section className="notice">
            {/* <Image
              src=""
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              alt=""
            /> */}
            <h2>仲間が増えれば<br/>今日はもっとワクワク！</h2>
            {/* <Tooltip id={1} /> */}
            <p>シテモイ<span id="1" className="tooltip" onClick={()=>{openTooltip(1)}}>?</span>に新しい仲間が来てくれた！<br />
               なんて呼べばいいかな。<br />
               「いっせーのーで」で言うよ。<br />
               みんな、準備はいいかい？ 
            </p>
          </section>
          <section className="schedule">
            <h2>スケジュール</h2>
            <dl>
              <dt>日程</dt>
              <dd>４月９日（日）１１：００から</dd>
              <dd>５月７日（日）１２：００から</dd>
            </dl>
            <dl>
              <dt>速報／発表</dt>
              <dd>
                <dl>
                  <dt>候補発表</dt>
                  <dd>２０２３年４月２２日（土）</dd>
                </dl>
              </dd>
              <dd>
                <dl>
                  <dt>結果発表</dt>
                  <dd>２０２３年５月７日（日）</dd>
                </dl>
              </dd>
            </dl>
          </section>
          <section className="posting">
            <h2>応募はここから！</h2>
            <p>もうちょっとだけ待っててね！</p>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}
