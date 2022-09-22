import Head from 'next/head'
import Image from 'next/image'
import { GameStartScreen } from '../src/components/Initial'
import { Layout } from '../src/layouts'

  
export default function Home() {
  return (
    <>
      {/* <Layout> */}

        <div>
            hola mundo
            <GameStartScreen />
        </div>
      {/* </Layout> */}
    </>
  )
}
