import Head from "next/head";
import ArrowSlider from "../components/arrowSlider";
import Header from "../components/header";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15 ,16 ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`w-full`}>
        <section className={`h-screen w-full bg-green-500`}>
          <Header />
        </section>
        <section
          className={`min-h-screen w-full bg-purple-500 flex flex-col items-center p-6 `}
        >
          <h2 className={`mb-48`}>Our clients</h2>
          <ArrowSlider rowsFull={3} rowsMobile={6} itemsOnScreen={6}>
            {items.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`w-full h-full bg-red-500 p-6 flex items-center justify-center`}
                >
                  {item}
                </div>
              );
            })}
          </ArrowSlider>
        </section>
        <section className={`h-screen w-full bg-green-500`}>
        </section>
      </main>
    </div>
  );
}
