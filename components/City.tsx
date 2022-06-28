import { Flex, Img, Text } from "@chakra-ui/react";

interface CityProps {
    sourceImg: string;
    city: string;
    country: string;
}

export function City({ sourceImg, city, country }: CityProps) {
    return (
        <Flex
            width="256px"
            height="279px"
            border="1px"
            borderColor="#FFBA08"
            borderRadius="4px"
            bg="#FFFFFF"
            flexDirection="column"
        >
            <Img width="100%" height="173px" src={sourceImg} />

            <Flex
                alignContent="center"
                alignItems="center"
                width="100%"
                padding="20px"
                justifyContent="space-between"
            >
                <Flex flexDirection="column">
                    <Text
                        fontFamily="Barlow"
                        fontStyle="normal"
                        fontWeight="600"
                        fontSize="20px"
                        color="#47585B"
                    >
                        {city}
                    </Text>

                    <Text
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="26px"
                        color="#999999"
                        marginTop="12px"
                    >
                        {country}
                    </Text>
                </Flex>

                <Img width="30px" height="30px" borderRadius="100px" src={sourceImg} />
            </Flex>

        </Flex>
    )
}