import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'


export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.errorPage}>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          className={styles.errorImage}
        />

        <h1 className={styles.errorHeading}>Whoops!</h1>

        <h2 className={styles.errorHeading2}>
          This page does not exist
        </h2>
      </div>
    </Layout>
  )
}
