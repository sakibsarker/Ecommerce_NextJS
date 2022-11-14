import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
        <ul>
            <li c>
                <Link href='/'>Home</Link>
            </li>
            <li >
                <Link href='/shop'>Shop</Link>
            </li>
            <li >
                <Link href='/about'>About</Link>
            </li>
            <li >
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar