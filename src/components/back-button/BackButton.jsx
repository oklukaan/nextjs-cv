import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../back-button/page.module.css';

export default function BackButton() {
  const router = useRouter();

    return  <button className={styles.button_back} type="button" onClick={() => router.back()}>Go back</button>
}