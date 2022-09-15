import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const { asPath: route, back } = useRouter()

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={[4, 36]}
      py={[4, 7]}
    >
      <Box>
        {route !== "/" &&
          <Button
            variant="ghost"
            size="sm"
            onClick={back}
            title="Voltar"
            p={1}
          >
            <FiChevronLeft size={20} />
          </Button>
        }
      </Box>

      <Image
        src="/logo.svg"
        width={[20, 48]}
        height={[5, 12]}
        alt="Logo"
      />

      <Box />
    </Flex>
  )
}
