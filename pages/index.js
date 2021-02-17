import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Página Inicial</title>
            </Head>

            <main className={styles.main}>
                <h1>ICM Default Theme</h1>

                <Link href='https://google.com'>Google</Link>
            </main>
        </div>
    )
}
