import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";

import background from '../assets/Background.svg';
import airplane from '../assets/Airplane.svg';

export function Banner() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            as="div"
            width="100%"
            maxWidth={1440}
            height={["163px", "368.21px"]}
            marginX="auto"
        >
            <Flex
                as="div"
                w="100%"
                width={[375, 1440]}
                height={["163px", "335"]}
                marginX="auto"
                marginTop="4"
                paddingX="6"
                backgroundImage={background.src}
            >
                <Flex
                    as="div"
                    alignContent="center"
                    justifyContent="space-around"
                    marginX="auto"
                    marginY={["20px", "90px"]}
                >
                    <Flex color="white" flexDirection="column">
                        <Text
                            fontSize={["20px", "36px"]}
                            height={["58px", "108px"]}
                            width={["238px", "426px"]}
                            left={["16px", "140px"]}
                            top="180px"
                            fontWeight="500"
                            lineHeight={["30px", "54px"]}
                            fontStyle="normal"
                            fontFamily="Poppins"
                        >
                            5 Continentes,<br />
                            infinitas possibilidades.
                        </Text>

                        <Text
                            w={["333px", "524px"]}
                            mt="20px"
                            h={["41px", "57px"]}
                            left="140px"
                            fontSize={["14px", "20px"]}
                            fontWeight="400"
                            lineHeight={["21px", "30px"]}
                            fontStyle="normal"
                            fontFamily="Poppins"
                        >
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                        </Text>
                    </Flex>

                    {isWideVersion && <Img width="417.15" height="270.74" top="176px" src={airplane.src} />}
                </Flex>
            </Flex>
        </Flex>
    )
}