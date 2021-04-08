import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps){
  return(
    <Flex aling="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Italo Aurelio</Text>
          <Text color="gray.300" fontSize="small">italo@dd.com</Text>
        </Box>
      )} 

      <Avatar size="md" name="Italo" />
    </Flex>
  )
}