import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CityCard } from "../../components/Continent/CityCard";
import { ContinentInsigths } from "../../components/Continent/ContinentInsights";
import { Header } from "../../components/Header";

interface Continent {
  id: number
  name: string
  imageUrl: string
  description: string
}

const Continent: NextPage = () => {
  const [continent, setContinent] = useState<Continent>()
  const router = useRouter()
  const { continentId } = router.query

  useEffect(() => {
    fetch(`loclahost:3333/continents/${continentId}`)
      .then(response => response.json())
      .then(setContinent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  if (!continent) return null

  return (
    <Box minHeight="100vh" bgColor="light.500">
      <Header />

      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        bgImage={continent?.imageUrl}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        width="full"
        height={["150px", "500px"]}
        mb={[6, 20]}
        py={[4, 8, 20]}
        px={[4, 20, 36]}
      >
        <Box width="full" maxWidth="900px" mx="auto">
          <Heading fontSize={[28, 48]} fontWeight="semibold" color="light.500">
            {continent?.name}
          </Heading>
        </Box>
      </Flex>

      <Box px={[4, 20, 36]}>
        <SimpleGrid
          maxWidth="900px"
          mx="auto"
          columns={[1, 1, 1, 2]}
          spacing={16}
        >
          <Text
            fontSize={24}
            textAlign="justify"
            color="dark.500"
          >
            {continent?.description}
          </Text>
          
          <ContinentInsigths
            countries={50}
            languages={60}
            cities={27}
          />
        </SimpleGrid>
      </Box>

      <Box px={[4, 20, 36]}>
        <VStack
          align="flex-start"
          maxWidth="900px"
          mx="auto"
          mt={[8, 20]}
          mb={12}
        >
          <Heading
            fontSize={[24, 36]}
            fontWeight="medium"
            color="dark.500"
            mb={[5, 10]}
          >
            Cidades
          </Heading>

          <SimpleGrid
            as="ul"
            width="full"
            columns={[1, 1, 2, 3]}
            spacing={12}
          >
            <CityCard
              imageUrl="/continents/europe.svg"
              cityName="Londres"
              country="Reino Unido"
              countryFlagImageUrl="/"
            />

            <CityCard
              imageUrl="/continents/europe.svg"
              cityName="Roma"
              country="Itália"
              countryFlagImageUrl="/"
            />

            <CityCard
              imageUrl="/continents/europe.svg"
              cityName="Dublin"
              country="Irlanda"
              countryFlagImageUrl="/"
            />
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default Continent;
