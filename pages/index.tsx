import { Box, Divider, Heading, Stack } from "@chakra-ui/react"
import type { NextPage } from 'next'
import { Header } from "../components/Header"
import { Banner } from "../components/Home/Banner"
import { CategoriesList } from "../components/Home/CategoriesList"

const Home: NextPage = () => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Banner />
      <Box mt={[20, 20, 40]}>
        <CategoriesList />
      </Box>
      <Divider
        width={[16, 16, 24]}
        mx="auto"
        my={9}
        color="dark.500"
      />
      <Stack
        align="center"
        maxWidth="900px"
        px={[12, 20, 36]}
      >
        <Heading
          fontSize={[20, 20, 36]}
          fontWeight="medium"
          textAlign="center"
          color="dark.500"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Stack>
    </Box>
  )
}

export default Home
