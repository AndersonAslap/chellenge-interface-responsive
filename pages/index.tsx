import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Banner />
    </Flex>
  )
}
