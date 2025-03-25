// pages/_app.js
import "../styles/globals.css"; // ← Aquí va tu CSS
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
