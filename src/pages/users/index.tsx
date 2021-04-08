import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { Header } from "components/Header";
import { Sidebar } from 'components/Sidebar';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';


export default function UserList() {
  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" align="center" justify="space-between">
            <Heading fontWeight="normal" size="lg">Usuários</Heading>
            <Button as="a" leftIcon={<Icon as={RiAddLine} fontSize="20"/>} colorScheme="pink" size="sm" fontSize="md" cursor="pointer">
              Criar usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="green.300" w="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Italo Aurelio</Text>
                    <Text fontSize="sm" color="gray.300">italo@dd.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>04 de Abril de 2021</Text>
                </Td>
                <Td>
                <Button as="a" leftIcon={<Icon as={RiPencilLine} fontSize="16" />} colorScheme="purple" size="sm" fontSize="sm" cursor="pointer">
                  Editar
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}