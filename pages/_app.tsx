import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import Head from "next/head"
import "../styles/global.css"

const colors = {
  light: {
    200: "#DADADA",
    500: "#F5F8FA",
    900: "#FFFFFF"
  }
}

const theme = extendTheme({
  colors
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
