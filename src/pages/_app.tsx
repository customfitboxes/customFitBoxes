import "../styles/global.css";

import type { AppProps } from "next/app";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ZohoChatWidget from "@/components/shared/zohoWidget";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ZohoChatWidget />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    <Component {...pageProps} />
    <FloatingWhatsApp
      phoneNumber="+13073938994"
      accountName="Team"
      notification={false}
      buttonClassName="left-3 -mb-5"
      chatboxClassName="left-20 "
      allowClickAway
    />
  </>
);

export default MyApp;
