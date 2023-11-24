import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function footer() {
  return (
    <div className={styles.container}>
        <span> @all right reserved.</span>
        <div className={styles.icons}>
          <Image src="/1.png" width="20" height="20"/>
          <Image src="/2.png" width="20" height="20"/>
          <Image src="/3.png" width="20" height="20"/>
          <Image src="/4.png" width="20" height="20"/>
          </div>
    </div>
  )
}

export default footer