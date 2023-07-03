import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

// Cada que se trabaja con children
type Props = {
    children?: React.ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Giorgio Ventura" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title},pokemon,pokedex`} />
                <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
                <meta property="og:description" content={`Esta página tiene informacion sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}
