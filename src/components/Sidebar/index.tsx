import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'
import { useBreakpointValue } from "@chakra-ui/react"
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>           
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  
  return(
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}