import { Flex,  Button, Stack } from '@chakra-ui/react'
import { Input } from 'components/Form/Input'

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex w="100%" maxW={360} as="form" flexDirection="column" bgColor="gray.800" p={8} borderRadius={8}>
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
          <Button type="submit" bgColor="pink.500">Entrar</Button>
        </Stack>
      </Flex>    
    </Flex>
  )
}
