import { Flex, Img, Tooltip, Link as ChackraLink, Icon } from "@chakra-ui/react";

import logo from '../assets/Logo.svg';
import Link from "next/link";

import { BsChevronLeft } from "react-icons/bs";

interface HeaderProps {
    isShowBackLink?: boolean;
}

export function Header({ isShowBackLink = false }: HeaderProps) {
    return (
        <Flex
            as="header"
            position="relative"
            justify="center"
            width="100%"
            maxWidth={1240}
            marginX="auto"
            marginTop={["4", "7"]}
        >

            {isShowBackLink &&
                <Link href="/" passHref>
                    <ChackraLink
                        position="absolute"
                        top="0"
                        left={["4", "8"]}
                    >
                        <Icon as={BsChevronLeft} fontSize={["md", "3xl"]} title="Home" />
                    </ChackraLink>
                </Link>
            }

            <Img src={logo.src} w={["81px", "184px"]} h={["20px", "45.92px"]} />


        </Flex>
    )
}