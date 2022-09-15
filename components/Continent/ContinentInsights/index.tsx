import { Center, Flex } from "@chakra-ui/react";
import { Insight } from "./Insight";

interface ContinentInsightsProps {
  countries: number
  languages: number
  cities: number
}

export function ContinentInsigths({ countries, languages, cities }: ContinentInsightsProps) {
  return (
    <Center>
      <Flex
        as="ul"
        justifyContent="center"
        flexWrap="wrap"
        columnGap={12}
        rowGap={6}
      >
        <Insight
          value={countries}
          label="países"
        />

        <Insight
          value={languages}
          label="línguas"
        />

        <Insight
          value={cities}
          label="cidades"
        />
      </Flex>
    </Center>
  )
}
