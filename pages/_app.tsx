
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import Layout from "../components/layout"
import {ScreenSizeProvider} from "../context/screenSizeContext"
import {SidebarContextProvider} from "../context/sidebarContext"

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

export default MyApp
