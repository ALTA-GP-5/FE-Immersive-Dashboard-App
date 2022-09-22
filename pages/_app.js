import { getCookie } from "cookies-next";
import "../styles/globals.css";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie("Token")}`,
  };
  return <Component {...pageProps} />;
}

export default MyApp;
