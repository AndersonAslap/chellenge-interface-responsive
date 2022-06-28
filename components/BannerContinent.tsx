import { Flex } from "@chakra-ui/react";


import europe from '../assets/continent/europe.png';

interface BannerContinentProps {
    sourceImage: string;
    text: string;
}

export function BannerContinent({ sourceImage, text }: BannerContinentProps) {

    return (
        <Flex
            as="div"
            width="100%"
            maxWidth={1440}
            height="500px"
            marginX="auto"
            backgroundImage={sourceImage}
        >
        </Flex>
    )
}