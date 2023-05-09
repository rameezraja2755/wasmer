import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import localFont from "next/font/local";


const gilroy = localFont({
  src: [
    {
      path: "../../public/gilroy/Gilroy-Medium.ttf",
      weight: "600",
    },
    {
      path: "../../public/gilroy/Gilroy-Regular.ttf",
      weight: "500",
    },
    {
      path: "../../public/gilroy/Gilroy-RegularItalic.ttf",
      weight: "400",
    },
  ],

  variable: "--font-gilroy",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={gilroy.variable}>
      <div className={"font-gilroy"}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
