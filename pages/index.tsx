import type { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import getConfig from 'next/config'
import AppEntrance from './app/index'

const { _, publicRuntimeConfig } = getConfig()

const Home: NextPage = () => {
	if (publicRuntimeConfig.DESKTOP_RELEASE === true) {
		return (
			<AppEntrance />
		)
	}

  return (
	 <div>
		<Head>
		  <title>Concord</title>
		  <meta property='og:type' content='website' />
		  <meta property="og:url" content="https://concord.chat/" />
		  <meta property="og:site_name" content="Concord" />
		  <meta property="og:keywords" content="Concord,Free voice server,Voice chat software,Voice Chat,Gaming,Chatting app,Chat,Concord chat,Open source chat app" />
		  <meta property="og:description" content="Time to ditch Discord and Guilded. Concord Features a new Platform made to let you communicate with your friends and communities in near real-time" />
		  <meta property="og:image:type" content="image/png" />
		  <meta property="twitter:title" content="Concord | Your Town Square" />
		  <meta property="twitter:card" content="summary_large_image" />
		  <meta property="twitter:site" content="@concordchats" />
		  <meta property="twitter:site:id" content="@concordchats" />
		  <meta property="twitter:creator" content="@concordchats" />
		  <meta property="twitter:creator:id" content="@concordchats" />
		</Head>
	 </div>
  )
}

export default Home
