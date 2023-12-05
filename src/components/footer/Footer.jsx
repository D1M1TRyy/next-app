import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function footer() {
  return (
    <div className={styles.container}>
        <span> @all right reserved.</span>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/"><Image src="/1.png" width="20" height="20"/></a>
          <a href="https://www.instagram.com/"><Image src="/2.png" width="20" height="20"/></a>
          <a href="https://twitter.com/i/flow/login"><Image src="/3.png" width="20" height="20"/></a>
          <a href="https://www.youtube.com/"><Image src="/4.png" width="20" height="20"/></a>
          </div>
    </div>
  )
}

export default footer