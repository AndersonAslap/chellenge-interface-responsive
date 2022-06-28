import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";


interface TravelTypeProps {
    source: any;
    description: string;
}

export function TravelType({ source, description }: TravelTypeProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={["row", "column"]}
        >

            {isWideVersion
                ? <Img src={source} />
                : <Text>.</Text>
            }
            <Text
                fontWeight={["500", "600"]}
                fontSize={["18px", "24px"]}
                lineHeight={["27px", "36px"]}
                textAlign="center"
                color="#47585B"
                fontStyle="normal"
                fontFamily="Poppins"
            >
                {description}
            </Text>
        </Flex>
    );
}