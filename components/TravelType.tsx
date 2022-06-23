import { Flex, Img, Text } from "@chakra-ui/react";


interface TravelTypeProps {
    source: any;
    description: string;
}

export function TravelType({ source, description }: TravelTypeProps) {
    return (
        <Flex
            w="158px"
            height="145px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Img src={source} />
            <Text
                mt="20px"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
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