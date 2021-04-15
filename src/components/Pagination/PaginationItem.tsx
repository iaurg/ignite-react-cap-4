import { Button } from "@chakra-ui/react";

type PaginationProps = {
  isCurrent?: boolean
  number: number
  onPageChange: (page :number) => void
}

export function PaginationItem({ isCurrent, number, onPageChange }: PaginationProps){
  if(isCurrent) {
    return(
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }

  return(
    <Button 
      size="sm"
      fontSize="xs"
      width="4"
      onClick={() => onPageChange(number)}
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}