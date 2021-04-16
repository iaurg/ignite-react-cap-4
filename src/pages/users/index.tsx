import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useState } from 'react';

import { Header } from "components/Header";
import { Pagination } from 'components/Pagination';
import { Sidebar } from 'components/Sidebar';
import { useUsers } from 'services/hooks/useUsers';
import { queryClient } from 'services/queryClient';
import { api } from 'services/api';


export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, isError } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    })
  }

  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" align="center" justify="space-between">
            <Heading fontWeight="normal" size="lg">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
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
                    {data.users.map(user => 
                      <Tr key={user.id}>
                        {console.log(user)}
                        <Td px={["4","4","6"]}>
                          <Checkbox colorScheme="pink"/>
                        </Td>
                        <Td>                          
                          <Box>
                            <ChakraLink color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </ChakraLink>
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
                <Pagination 
                  totalCounterOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )
          }          
        </Box>
      </Flex>
    </Box>
  )
}