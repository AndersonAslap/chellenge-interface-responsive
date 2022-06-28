import { Flex, Img, Link, Tooltip } from "@chakra-ui/react";

import logo from '../assets/Logo.svg';

import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
    isShowBackLink?: boolean;
}

export function Header({ isShowBackLink = false }: HeaderProps) {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1440}
            height={["50px", "100px"]}
            marginX="auto"
            marginTop="4"
            paddingX="6"
            alignItems="center"
            justifyContent="space-around"
        >

            {isShowBackLink && <Tooltip label="Voltar para a página inicial"><Link href="/" fontSize="28" width="32px" height="32px"><RiArrowLeftSLine /></Link></Tooltip>}

            {!isShowBackLink && <Flex as="span"></Flex>}

            <Img src={logo.src} w={["81px", "184.06px"]} h={["20px", "45.92px"]} />

            <Flex as="span"></Flex>
        </Flex>
    )
}