/** @type {import('next').NextConfig} */
let URL = process.env.URL
let API_VER = process.env.API_VERSION
let RELEASE_CHANNEL = process.env.RELEASE_CHANNEL

let DESKTOP_RELEASE = RELEASE_CHANNEL === 'desktop'


const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
      API_ENDPOINT: '//concord.chat/api',
      API_VERSION: API_VER,
      WEBAPP_ENDPOINT: URL,
      MARKETING_ENDPOINT: URL,
      RELEASE_CHANNEL: RELEASE_CHANNEL,
      FUTURE_URL: '//concord.com',
      DESKTOP_RELEASE: DESKTOP_RELEASE
  },
}


module.exports = nextConfig
