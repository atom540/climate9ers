import Image from "next/image"
import styles from './footer.module.css';
const Footer = () => {
  return (
    <>
    <div className={styles.supercontainer}>
    <div className={styles.container}>
    <Image src="/images/logo.png" alt="" width={106} height={27} />
    </div>
    <div className={styles.information}>
    <h3 className={styles.title}>Contact Us</h3>
    <div className={styles.personInfo}>
    <span>Surojit Bose</span>
    <span>Investment Manager</span>
    <span>Surojit [at] climateniners.com</span>
    </div>
    </div>
    </div>
    </>
    )
}

export default Footer
