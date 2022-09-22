import Head from "next/head"
import { MainMenu } from "../components/UI/mainMenu"



export const Layout = ({ children,title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Poke Next"}</title>
            <meta name="author" content="Luis Vergara"/>
            <meta name="description" content="for educational purpose only"/>
            <meta name="keywords" content="pokemon, game"/>

        </Head>

        <MainMenu />
        <main>
            {children}
        </main>

    </>
  )
}