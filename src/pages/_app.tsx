import type { AppProps } from "next/app";

import { Ubuntu } from "@next/font/google";

import "normalize.css";
import "styles/global.scss";
import { Toaster } from "react-hot-toast";
import MainLayout from "layouts/MainLayout";

const ubuntu = Ubuntu({ weight: ["400", "500"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <MainLayout>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
