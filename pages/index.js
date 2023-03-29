import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function HomePage() {
  return <div>
    <div>Welcome to Next.js! for testing of suspect commit</div>
    <button
    type="button"
    onClick={() => {
      throw new Error("Sentry Frontend Error number 3");
    }}
    >
      Throw error
    </button>
    <button
    type="button"
    onClick={() => {
      myUndefinedFunction4();
    }}
    >
      Throw error 2
    </button>
    </div>

}

export default HomePage
