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
        <meta property='og:type' content='website'></meta>
        <meta property="og:url" content="https://concord.chat/"></meta>
        <meta property="og:site_name" content="Concord"></meta>
        <meta property="og:keywords" content="Concord,Free voice server,Voice chat software,Voice Chat,Gaming,Chatting app,Chat,Concord chat,Open source chat app"></meta>
        <meta property="og:description" content="Time to ditch Discord and Guilded. Concord Features a new Platform made to let you communicate with your friends and communities in near real-time"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="twitter:title" content="Concord | Your Town Square"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:site" content="@concordchats"></meta>
        <meta property="twitter:site:id" content="@concordchats"></meta>
        <meta property="twitter:creator" content="@concordchats"></meta>
        <meta property="twitter:creator:id" content="@concordchats"></meta>
      </Head>
	 </div>
  )
}

export default Home
