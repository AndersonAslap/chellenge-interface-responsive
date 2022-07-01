import { Flex, Heading, Text, Box, Image, useBreakpointValue, Wrap, WrapItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Header } from "../components/Header";

const Home: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        as="main"
        flexDir="column"
        alignItems="center"
        w="100%"
        maxW={1440}
        minW={375}
        marginX="auto"
      >
        <Header />

        <Flex
          position="relative"
          bgImg="url('./images/background.png')"
          bgRepeat="no-repeat"
          bgPosition="top"
          bgSize="cover"
          w="100%"
          mt={["4", "7"]}
        >
          <Flex
            justify="space-between"
            alignItems="center"
            position="relative"
            mx="auto"
            w="100%"
            maxW={1240}
            px={["4", "10"]}
            py={["7", "20"]}
          >

            <Flex
              alignItems="left"
              flexDir="column"
              gap={["2", "5"]}
            >
              <Heading as="h2" fontSize={["xl", "4xl"]} fontWeight="500" color="white.50">
                5 Continentes,<br /> infinitas possibilidades.
              </Heading>
              <Text fontSize={["sm", "xl"]} fontWeight="400" color="gray.100">
                Chegou a hora de tirar do papel a viagem que você {!!isWideVersion && (<br />)} sempre sonhou.
              </Text>
            </Flex>

            {isWideVersion && (
              <Box position="absolute" right="30" bottom="-9">
                <Image src="./images/airplane.svg" />
              </Box>
            )}

          </Flex>
        </Flex>

        <Flex>
          <Wrap>
            <WrapItem>
              hg
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </>
  )
}

export default Home;
