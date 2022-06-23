import { Flex, Text } from "@chakra-ui/react";
import { BannerContinent } from "../../components/BannerContinent";
import { Header } from "../../components/Header";

import europe from '../../assets/continent/europe.png';

interface ContinentProps {
    bannerContinent: {
        sourceImage: string;
        text: string;
    }
}

export default function Continent({ bannerContinent }: ContinentProps) {
    return (
        <Flex direction="column" minHeight="100vh" alignItems="center">
            <Header isShowBackLink />
            <BannerContinent sourceImage={bannerContinent.sourceImage} text={bannerContinent.text} />

            <Flex
                w="100%"
                maxWidth={1440}
                alignItems="center"
                justifyContent="space-around"
                marginY="80px"
                height="211px"
            >


                <Text
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="36px"
                    textAlign="justify"
                    fontStyle="normal"
                    fontFamily="Poppins"
                    w="600px"
                    color="#47585B"
                >
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>


                <Flex flexDir="column" alignItems="center">
                    <Text
                        color="#FFBA08"
                        fontWeight="600"
                        fontSize="48px"
                        lineHeight="72px"
                        textAlign="justify"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >50</Text>
                    <Text
                        color="#47585B"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="36px"
                        textAlign="center"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >paises</Text>
                </Flex>

                <Flex flexDir="column" alignItems="center">
                    <Text
                        color="#FFBA08"
                        fontWeight="600"
                        fontSize="48px"
                        lineHeight="72px"
                        textAlign="justify"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >60</Text>
                    <Text
                        color="#47585B"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="36px"
                        textAlign="center"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >línguas</Text>
                </Flex>

                <Flex flexDir="column" alignItems="center">
                    <Text
                        color="#FFBA08"
                        fontWeight="600"
                        fontSize="48px"
                        lineHeight="72px"
                        textAlign="justify"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >27</Text>
                    <Text
                        color="#47585B"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="36px"
                        textAlign="center"
                        fontStyle="normal"
                        fontFamily="Poppins"
                    >cidades +100</Text>
                </Flex>


            </Flex>
        </Flex>
    );
}

export function getServerSideProps(context) {

    const sourceImage = europe.src;
    const text = "Europa";

    return {
        props: {
            bannerContinent: {
                sourceImage,
                text
            }
        }
    }
}