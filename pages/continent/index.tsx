import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function Continent(props) {
    return (
        <Flex direction="column" minHeight="100vh" alignItems="center">
            <Header isShowBackLink />
        </Flex>
    );
}