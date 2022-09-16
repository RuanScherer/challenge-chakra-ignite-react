import { Box, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      bgImage="url('/home/home-banner-background.svg')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      width="full"
      py={[4, 8, 20]}
      px={[4, 20, 36]}
    >
      <Box
        maxWidth="900px"
        position="relative"
        mx="auto"
      >
        <Box maxWidth={["none", "none", "none", "50%"]}>
          <Heading
            fontSize={[20, 36]}
            fontWeight="medium"
            color="light.500"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Text
            mt={5}
            fontSize={[14, 20]}
            color="light.200"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        
        <Image
          src="/home/airplane.svg"
          position="absolute"
          transform="rotate(3deg)"
          right="-1rem"
          bottom={["-3rem", "-5rem", "-7rem"]}
          width="24rem"
          display={["none", "none", "none", "block"]}
          alt="Avião amarelo com detalhe branco e nuvens brancas ao redor"
        />
      </Box>
    </Box>
  )
}