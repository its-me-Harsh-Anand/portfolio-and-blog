import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/header.module.css'
import SearchBar from './SearchBar'


function Header() {
    
    return (
        <header className={styles.header}>
             <div className={styles.headerDiv}>
                 <Link href='/'>
                     <a className={styles.logoDiv}>
                         <Image src = '/images/logo.png' width={40} height={40}alt="logo" />
                         <span className={styles.spanLogo}>
                             Learn with Harsh
                         </span>
                     </a>
                 </Link>

                 <nav className={styles.navigation}>
                     <Link href='/'>
                         <a className={styles.links}>Home</a>
                     </Link>

                     <Link href='/blog'>
                         <a className={styles.links}>Blog</a>
                     </Link>
                     <Link href='/opportunities'>
                         <a className={styles.links}>Opportunities</a>
                     </Link>
                     <Link href='/about'>
                         <a className={styles.links}>About</a>
                     </Link>

                     <SearchBar />
                 </nav>
             </div>
        </header>
    )
}

export default Header
