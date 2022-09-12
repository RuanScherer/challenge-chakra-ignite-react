import { Box, Image, ListItem, Text } from "@chakra-ui/react";

interface CategoryItemProps {
  imageSrc: string
  imageAltText: string
  label: string
}

export function CategoryItem({ imageSrc, imageAltText, label }: CategoryItemProps) {
  return (
    <ListItem
      display="flex"
      flexDirection={["row", "row", "column"]}
      alignItems="center"
      justifyContent="center"
    >
      <Image
        display={["none", "none", "block"]}
        src={imageSrc}
        alt={imageAltText}
        width={20}
        mb={5}
      />
      <Box
        display={["block", "block", "none"]}
        width={2}
        height={2}
        mr={2}
        rounded="full"
        backgroundColor="highlight.900"
      />
      <Text
        fontWeight={"semibold"}
        fontSize={[18, 18, 24]}
        color="dark.500"
      >
        {label}
      </Text>
    </ListItem>
  )
}