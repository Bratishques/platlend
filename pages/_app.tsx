import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";
import "../styles/globals.css";
import Layout from "../components/layout";
import { ScreenSizeProvider } from "../context/screenSizeContext";
import { SidebarContextProvider } from "../context/sidebarContext";
import Loader from "../components/loader";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true)
    })
  }, [])
  return (
    <SidebarContextProvider>
      <ScreenSizeProvider>
        <Layout>
          {!isLoaded &&
            <Loader>
              <div className={`text-7xl text-white fixed`}> Loading... </div>
            </Loader>
          }
          <Component {...pageProps} />
        </Layout>
      </ScreenSizeProvider>
    </SidebarContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
