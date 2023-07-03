import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

// Cada que se trabaja con children
type Props = {
    children?: React.ReactNode,
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Giorgio Ventura" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title},pokemon,pokedex`} />
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
