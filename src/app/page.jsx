import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      
      {/* <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <p>hi</p>
          </div>
          <div className={styles.card}>
            <p>hi</p>
          </div>
          <div className={styles.card}>
            <p>hi</p>
          </div>
          <div className={styles.card}>
            <p>hi</p>
          </div>
        </div>
      </div>
      
      <div className={styles.login}>
        <div className={styles.wrapper}>
          <input type="text" />
          <Image src="/1.png" width="20" height="20"/>
        </div>
        
      </div> */}
      <div className={styles.textareas}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      
      
    </main>
  )
}
