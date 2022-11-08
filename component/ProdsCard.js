import React from 'react'
import Image from 'next/image'
import Prpp from '../images/sakib.jpg'
import Styles from '../styles/ProdsCard.module.css'
function ProdsCard() {
  return (
    <div>
        <div>
            <div className={Styles.pdtitle}>
                <Image
                src={Prpp}
                width={200}
                height={200}/>
                <div>
                <h3>Mens Jacket</h3>
                <h3>456tk</h3>
                <button>Buy now</button>

                </div>
             
            </div>
        </div>
    </div>
  )
}

export default ProdsCard