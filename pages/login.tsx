import type { NextPage } from 'next'
import Head from 'next/head'

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Slack Avion | Login</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Welcome to Slack Avion</h1>
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </main>
    </div>
  )
}

export default Login
