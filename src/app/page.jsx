import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'
import Image from "next/image";
import Hero from "public/hero.png";
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}
          >Better design for your digital products
        </h1>
        <p className={styles.desc}> 
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
          </p>
          <Button title={"see our works"} url={"/portfolio"}/>
      </div>


      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="hero" />
      </div>


      
      
    </main>
  )
}
