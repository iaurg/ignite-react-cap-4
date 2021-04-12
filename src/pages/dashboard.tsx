import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})
import { Header } from "components/Header";
import { Sidebar } from 'components/Sidebar';

const options = {
  chart:{
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  tooltip: {
    theme: 'dark'
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-07T20:38:00.000Z',
      '2021-04-08T20:38:00.000Z',
      '2021-04-09T20:38:00.000Z',
      '2021-04-10T20:38:00.000Z',
      '2021-04-11T20:38:00.000Z',
      '2021-04-12T20:38:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {names:'series1', data:[12,312,54,32,43,55]}
]

export default function Dashboard() {
  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text>Inscritos da semana</Text>
            <Chart type="area" series={series} options={options} height="180px"/>
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Taxa de abertura</Text>
            <Chart type="area" series={series} options={options} height="180px"/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}