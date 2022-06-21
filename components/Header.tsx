import { Flex, Img } from "@chakra-ui/react";

import logo from '../assets/Logo.svg';

export function Header() {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1440}
            height="100"
            marginX="auto"
            marginTop="4"
            paddingX="6"
            alignItems="center"
            justifyContent="space-around"
        >

            <Flex as="span" >{`<`}</Flex>

            <Img src={logo.src} />

            <Flex as="span"></Flex>
        </Flex>
    )
}