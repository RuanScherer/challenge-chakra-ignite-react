import { Flex, Text } from "@chakra-ui/react"

interface InsightProps {
  value: number
  label: string
}

export function Insight({ value, label }: InsightProps) {
  return (
    <Flex
      as="li"
      flexDirection="column"
      alignItems={["flex-start", "center"]}
    >
      <Text
        fontSize={[24, 48]}
        fontWeight="semibold"
        color="highlight.900"
      >
        {value}
      </Text>
      <Text
        fontSize={[18, 24]}
        fontWeight="semibold"
        lineHeight={1}
        color="dark.500"
      >
        {label}
      </Text>
    </Flex>
  )
}
