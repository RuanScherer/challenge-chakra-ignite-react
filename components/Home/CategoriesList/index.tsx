import { Box, List } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

export function CategoriesList() {
  return (
    <Box px={[12, 20, 36]}>
      <List
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={["2.25rem 4.5rem", "2.25rem 4.5rem", "5rem 10rem"]}
        maxWidth="900px"
        mx="auto"
      >
        <CategoryItem
          imageSrc="cocktail.svg"
          imageAltText="Copo de coquetel"
          label="vida noturna"
        />
        <CategoryItem
          imageSrc="surf.svg"
          imageAltText="Prancha de surf e sol"
          label="praia"
        />
        <CategoryItem
          imageSrc="building.svg"
          imageAltText="Prédio"
          label="moderno"
        />
        <CategoryItem
          imageSrc="museum.svg"
          imageAltText="Museu"
          label="clássico"
        />
        <CategoryItem
          imageSrc="earth.svg"
          imageAltText="Mundo"
          label="e mais..."
        />
      </List>
    </Box>
  )
}