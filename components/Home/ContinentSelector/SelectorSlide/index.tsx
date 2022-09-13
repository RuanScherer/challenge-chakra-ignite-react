import { Center, Heading } from "@chakra-ui/react";

interface SelectorSlideProps {
  imageUrl: string
  title: string
  description: string
}

export function SelectorSlide({ imageUrl, title, description }: SelectorSlideProps) {
  return (
    <Center
      bgImage={imageUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      width="full"
      height="450px"
      p={2}
      flexDirection="column"
      cursor="pointer"
      transition=".3s"
      _hover={{
        filter: "brightness(0.8)"
      }}
    >
      <Heading
        as="h3"
        fontSize={[24, 24, 48]}
        fontWeight="bold"
        color="light.500"
        textAlign="center"
      >
        {title}
      </Heading>
      
      <Heading
        as="h4"
        fontSize={[14, 14, 24]}
        fontWeight="bold"
        color="light.200"
        textAlign="center"
        mt={[3, 3, 4]}
      >
        {description}
      </Heading>
    </Center>
  )
}
