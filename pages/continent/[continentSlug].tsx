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
  aboutText: string
  insights: {
    countries: number
    languages: number
    cities: number
  }
  cities: City[]
}

type City = {
  name: string
  imageUrl: string
  country: {
    name: string
    imageUrl: string
  }
}

const Continent: NextPage = () => {
  const [continent, setContinent] = useState<Continent>()
  const router = useRouter()
  const { continentSlug } = router.query

  useEffect(() => {
    if (!continentSlug) return
    
    fetch(`http://localhost:3333/continents?slug=${continentSlug}`)
      .then(response => response.json())
      .then((continents) => setContinent(continents[0]))
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
            {continent?.aboutText}
          </Text>
          
          <ContinentInsigths
            countries={continent?.insights.countries}
            languages={continent?.insights.languages}
            cities={continent?.insights.cities}
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
            {continent?.cities.map(city => (
              <CityCard
                imageUrl={city.imageUrl}
                cityName={city.name}
                country={city.country.name}
                countryFlagImageUrl={city.country.imageUrl}
                key={city.name}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default Continent;
