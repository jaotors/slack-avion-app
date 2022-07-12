import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: pink;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Slack Avion App</title>
        <meta name='description' content='Slack Avion App pet project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <StyledTitle>Landing page here!!!</StyledTitle>
        <ul>
          <li><Link href='/login'>Login</Link></li>
          <li><Link href='/dashboard'>Dashboard</Link></li>
        </ul>
      </main>
    </div>
  )
}

export default Home
