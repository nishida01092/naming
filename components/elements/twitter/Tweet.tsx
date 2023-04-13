import dynamic from "next/dynamic";
import Script from 'next/script';

const DynamicTwitterWidget = dynamic<{}>(
  () => import("./TweeterWidget").then((module) => module.TwitterWidget),
  { ssr: false }
);
export const Tweet = () => {
  return (
    <>
      <DynamicTwitterWidget />
      <Script src="https://platform.twitter.com/widgets.js" 
       charSet="utf-8" 
       strategy="lazyOnload"
      />
    </>
  );
};
