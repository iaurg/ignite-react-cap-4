import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
  return(
    <Flex aling="center">
      <Box mr="4" textAlign="right">
        <Text>Italo Aurelio</Text>
        <Text color="gray.300" fontSize="small">italo@dd.com</Text>
      </Box>

      <Avatar size="md" name="Italo" />
    </Flex>
  )
}