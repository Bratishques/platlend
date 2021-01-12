import "tailwindcss/tailwind.css";
import PropTypes from "prop-types";
import "../styles/globals.css";
import Layout from "../components/layout";
import { ScreenSizeProvider } from "../context/screenSizeContext";
import { SidebarContextProvider } from "../context/sidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarContextProvider>
      <ScreenSizeProvider>
        <Layout>
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
