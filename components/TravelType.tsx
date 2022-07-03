import { Flex, Img, Text, useBreakpointValue, Circle } from "@chakra-ui/react";


interface TravelTypeProps {
    urlImage: any;
    description: string;
}

export function TravelType({ urlImage, description }: TravelTypeProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            alignItems="center"
            flexDirection={["row", "column"]}
            gap={["2", "6"]}
        >
            {isWideVersion
                ? <Img src={urlImage} />
                : <Circle size="2" bg="yellow.100" />
            }
            <Text
                fontSize={["lg", "2xl"]} fontWeight={["500", "600"]}
            >
                {description}
            </Text>
        </Flex>
    );
}