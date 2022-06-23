import { Flex, Divider, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SlidesCarousel } from "../components/SlidesCarousel";
import { TravelType } from "../components/TravelType";

import { travelTypeList } from '../utils/travel-type-list';

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh" alignItems="center">

      <Header />

      <Banner />

      <Flex
        as="div"
        width="1160px"
        height="145px"
        marginY="80.79px"
        flexDirection="row"
        justifyContent="space-between"
      >
        {travelTypeList.map((travelType) => {
          return <TravelType key={travelType.description} description={travelType.description} source={travelType.source} />
        })}

      </Flex>

      <Divider border="2px" borderColor="#47585B" w="90px" h="0px" />

      <Text
        mt="52px"
        width="839px"
        h="101px"
        fontWeight="500"
        fontSize="36px"
        lineHeight="54px"
        textAlign="center"
        fontStyle="normal"
        fontFamily="Poppins"
        mb="52px"
        color="#47585B"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

      <Flex
        w="1240px"
        height="450px"
        mb="40px"
      >
        <SlidesCarousel />
      </Flex>

    </Flex>
  )
}
