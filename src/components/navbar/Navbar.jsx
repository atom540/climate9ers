import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/logo.png"
        alt=""
        width={110}
        height={30}
        className={styles.img}
      />
      <div className={styles.link}>
        <Link href="#" className={styles.divlink}>
          Approach
        </Link>
        <Link href="#" className={styles.divlink}>
          Contact Us
        </Link>
        <Link href="#" className={styles.divlink}>
          About Us
        </Link>
      </div>
      <button className={styles.button}>Login</button>
    </div>
  )
}

export default Navbar
