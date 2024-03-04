import Image from 'next/image'
import styles from './page.module.css'
import { createClient } from 'edgedb'

export default async function Home() {
  const client = createClient()
  const data = await client.query('SELECT 1 + 1')

  return <main className={styles.main}>data: {JSON.stringify(data)}</main>
}
