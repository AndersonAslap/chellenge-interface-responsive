import { Flex, Img, Text } from "@chakra-ui/react";

import background from '../assets/Background.svg';
import airplane from '../assets/Airplane.svg';

export function Banner() {
    return (
        <Flex
            as="div"
            width="100%"
            maxWidth={1440}
            height="369"
            marginX="auto"
        >
            <Flex
                as="div"
                width="100%"
                marginX="auto"
                marginTop="4"
                paddingX="6"
                height="335"
                backgroundImage={background.src}
            >
                <Flex
                    as="div"
                    alignContent="center"
                    justifyContent="space-around"
                    width="90%"
                    marginX="auto"
                    marginY="90px"
                >
                    <Flex color="white" flexDirection="column">
                        <Text
                            fontSize="36px"
                            height="108px"
                            width="426px"
                            left="140px"
                            top="180px"
                            fontWeight="500"
                            lineHeight="54px"
                            fontStyle="normal"
                            fontFamily="Poppins"
                        >
                            5 Continentes,<br />
                            infinitas possibilidades.
                        </Text>

                        <Text
                            w="524px"
                            mt="20px"
                            h="57px"
                            left="140px"
                            fontSize="20px"
                            fontWeight="400"
                            lineHeight="30px"
                            fontStyle="normal"
                            fontFamily="Poppins"
                        >
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                        </Text>
                    </Flex>

                    <Img width="417.15" height="270.74" top="176px" src={airplane.src} />
                </Flex>
            </Flex>
        </Flex>
    )
}