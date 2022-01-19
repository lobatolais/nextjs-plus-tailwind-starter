import React from 'react'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'

const Home: NextPage = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
    </>
  )
}

export default Home
