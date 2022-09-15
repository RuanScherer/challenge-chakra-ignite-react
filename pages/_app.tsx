import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import "../styles/global.css"

const colors = {
  light: {
    200: "#DADADA",
    500: "#F5F8FA",
    900: "#FFFFFF"
  },
  dark: {
    200: "#999999",
    500: "#47585B"
  },
  highlight: {
    900: "#FFBA08"
  }
}

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`
}

const theme = extendTheme({
  colors,
  fonts
})

function WorldTripApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default WorldTripApp
