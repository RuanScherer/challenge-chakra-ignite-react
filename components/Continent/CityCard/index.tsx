import { Box, Flex, Text } from "@chakra-ui/react"

interface CityCardProps {
  imageUrl: string
  cityName: string
  country: string
  countryFlagImageUrl: string
}

export function CityCard({ imageUrl, cityName, country, countryFlagImageUrl }: CityCardProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      bgColor="light.900"
      border="1px solid rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Box
        bgImage={imageUrl}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        width="full"
        height="173px"
        borderRadius="4px 4px 0 0"
      />
      
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={6}
        py={4}
      >
        <Box>
          <Text
            fontSize={20}
            fontWeight="semibold"
            color="dark.500"
            mb={3}
          >
            {cityName}
          </Text>

          <Text
            fontSize={16}
            fontWeight="medium"
            color="dark.200"
          >
            {country}
          </Text>
        </Box>

        <Box
          bgImage={countryFlagImageUrl}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          width={30}
          height={30}
          borderRadius="full"
        />
      </Flex>
    </Flex>
  )
}
