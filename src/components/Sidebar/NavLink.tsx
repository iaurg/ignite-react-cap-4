import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon , href, children, ...rest}: NavLinkProps){
  return(
    <Link href={href} passHref>
      <a>
        <ChakraLink display="flex" align="center" {...rest}>
          <Icon as={icon} fontSize="20"/>
          <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
      </a>
    </Link>
  )
}