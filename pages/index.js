import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profiel from '../images/img.png'
import ProdsCard from '../component/ProdsCard'
function home() {
  return (
    <div>
      <div>
      <Image
        src={profiel}
        width={'100%'}
        height={800}
      />
        <h2 className={styles.h2}>NEW ARRIVLE</h2>
      </div>
      <ProdsCard/>
    </div>
  )
}

export default home