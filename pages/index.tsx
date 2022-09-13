import { Box, Divider, Heading, Stack } from "@chakra-ui/react"
import type { NextPage } from 'next'
import { Header } from "../components/Header"
import { Banner } from "../components/Home/Banner"
import { CategoriesList } from "../components/Home/CategoriesList"
import { ContinentSelector } from "../components/Home/ContinentSelector"

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
      
      <Box px={[0, 20, 36]} pb={12}>
        <Stack
          align="center"
          gap={12}
          maxWidth="900px"
          mx="auto"
        >
          <Heading
            as="h2"
            fontSize={[20, 20, 36]}
            fontWeight="medium"
            textAlign="center"
            color="dark.500"
            px={[4, 0]}
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Heading>

          <ContinentSelector />
        </Stack>
      </Box>
    </Box>
  )
}

export default Home
