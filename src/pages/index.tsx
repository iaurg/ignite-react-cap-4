import { Flex, Input, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex w="100%" maxW={360} as="form" flexDirection="column" bgColor="gray.800" p={8} borderRadius={8}>
        <Stack spacing={4}>
          <FormControl>    
              <FormLabel htmlFor="email">E-mail</FormLabel>   
              <Input
                placeholder="E-mail"
                name="email"
                type="email"
                id="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: "gray.900"
                }}
                size="lg"
              />
          </FormControl>  
          <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input 
                placeholder="Senha"
                name="password"
                type="password"
                id="password"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: "gray.900"
                }}
                size="lg"
              />
          </FormControl> 
        <Button type="submit" bgColor="pink.500">Entrar</Button>
        </Stack>
      </Flex>    
    </Flex>
  )
}
