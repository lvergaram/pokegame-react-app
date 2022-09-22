import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { Layout } from '../src/layouts'
import { GameDataProvider } from '../src/context/gameDataProvider';



function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <GameDataProvider>  
          <Component {...pageProps} />
        </GameDataProvider>
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
