import { Html, Head, Main, NextScript } from 'next/document'

function redirDesktop() {
	if (publicRuntimeConfig.DESKTOP_RELEASE === true) {
		window.history.pushState(null, '', '/app')
		window.location.reload()
  	}
}

export default function Document() {
  	return (
    	<Html>
      	<Head />
      	<body>
        		<Main />
        		<NextScript />
      	</body>
    	</Html>
  )
}