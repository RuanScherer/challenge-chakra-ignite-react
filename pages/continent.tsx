import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { CityCard } from "../components/Continent/CityCard";
import { ContinentInsigths } from "../components/Continent/ContinentInsights";
import { Header } from "../components/Header";

const Continent: NextPage = () => {
  return (
    <Box minHeight="100vh" bgColor="light.500">
      <Header />

      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        bgImage={"/europe.svg"}
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
            Europa
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
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
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
              imageUrl="/europe.svg"
              cityName="Londres"
              country="Reino Unido"
              countryFlagImageUrl="/"
            />
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default Continent;
