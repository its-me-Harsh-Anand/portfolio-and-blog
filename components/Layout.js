import Head from 'next/head'
import styles from '@/styles/layout.module.css'
import Header from './Header'

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href = "/favicon.ico" />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
            </Head>

            <Header />
            <main className={styles.layout}>
                {children}
            </main>
        </div>

    )
}

Layout.defaultProps = {
    title : "Learn with Harsh",
    keywords : "html, css, react, node, javascript, mongodb, startups, nextjs",
    description : "A blog website created for begineers to start with any tech stacks they want"
}

export default Layout
