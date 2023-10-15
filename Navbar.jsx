import React from 'react'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css"
import { useSelector } from 'react-redux'
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW !</div>
          <div className={styles.text}> 012 346 571 </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}> Homepage </li>
          </Link>
          <li className={styles.listItem}> Products </li>
          <Image src="/img/pizzalogo.png" alt="" width={100} height={100} />
          <li className={styles.listItem}> Menu</li>
          <li className={styles.listItem}> Contacts </li>
        </ul>
      </div>
      <Link href="/Cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={50} height={50} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

