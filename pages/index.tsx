import React, { useEffect } from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";
import { useRouter } from "next/router";

const Index: React.FC = () => {
    const router = useRouter()
  useEffect(() => {
      console.log(getInitialLocale())
     
     router.push(`/${getInitialLocale()}`)
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index