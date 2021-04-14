import { Flex,  Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from 'components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  }); 

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values)
  } 

  
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex w="100%" maxW={360} as="form" flexDirection="column" bgColor="gray.800" p={8} borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input 
          name="email" 
          type="email" 
          label="E-mail" 
          error={errors.email}
          {...register("email")} 
          />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register("password")} />
          <Button type="submit" bgColor="pink.500" isLoading={isSubmitting}>Entrar</Button>
        </Stack>
      </Flex>    
    </Flex>
  )
}
