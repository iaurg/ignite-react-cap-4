import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from "components/Header";
import { Pagination } from 'components/Pagination';
import { Sidebar } from 'components/Sidebar';


export default function UserList() {
  const { data, isLoading, isError } = useQuery('users', async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    const users = data.users.map(user => {
      return {
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
      }
    })

    return users
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" align="center" justify="space-between">
            <Heading fontWeight="normal" size="lg">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button as="a" leftIcon={<Icon as={RiAddLine} fontSize="20"/>} colorScheme="pink" size="sm" fontSize="md" cursor="pointer">
                Criar usuário
              </Button>
            </Link>
          </Flex>
          {
            isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) 
            : isError ? (
              <Flex justify="center">
                <Text>Falha ao carregar usuários</Text>                
              </Flex>
            ) 
            : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4","4","6"]} color="green.300" w="8">
                        <Checkbox colorScheme="pink"/>
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de Cadastro</Th>}
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(user => 
                      <Tr key={user.id}>
                        {console.log(user)}
                        <Td px={["4","4","6"]}>
                          <Checkbox colorScheme="pink"/>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && 
                          <Td>
                            <Text>{user.createdAt}</Text>
                          </Td>
                        }
                        <Td>
                        <Button as="a" leftIcon={<Icon as={RiPencilLine} fontSize="16" />} colorScheme="purple" size="sm" fontSize="sm" cursor="pointer">
                          {isWideVersion && "Editar" }
                        </Button>
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
                <Pagination />
              </>
            )
          }          
        </Box>
      </Flex>
    </Box>
  )
}