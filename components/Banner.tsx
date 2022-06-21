import { Flex, Img, Box } from "@chakra-ui/react";

import background from '../assets/Background.svg';
import airplane from '../assets/Airplane.svg';


export function Banner() {
    return (
        <Flex
            as="div"
            width="100%"
            maxWidth={1440}
            height="369"
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
                >
                    <Flex color="white" flexDirection="column">
                        <Box>5 Continentes,
                            infinitas possibilidades.
                        </Box>

                        <Box>
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                        </Box>
                    </Flex>

                    <Img width="417.15" height="270.74" top="176px" src={airplane.src} />
                </Flex>
            </Flex>
        </Flex>
    )
}