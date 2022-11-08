import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
function Navbar() {
  return (
    <div>
        <ul className={styles.use}>
            <li className={styles.li}>
                <Link href='/'>Home</Link>
            </li>
            <li className={styles.li}>
                <Link href='/shop'>Shop</Link>
            </li>
            <li className={styles.li}>
                <Link href='/about'>About</Link>
            </li>
            <li className={styles.li}>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar