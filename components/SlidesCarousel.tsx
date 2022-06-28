import React, { useRef, useState } from "react";
import { Flex, Text, Link, Tooltip } from "@chakra-ui/react";
import NextLink from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import europe from '../assets/europe.png';
import { cursorTo } from "readline";

import { RiEyeFill } from "react-icons/ri";



export function SlidesCarousel() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Flex
                        height={["250px", "450px"]}
                        backgroundImage={europe.src}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="600"
                            fontSize="48px"
                            lineHeight="72px"
                            textAlign="center"
                            color="#F5F8FA"
                        >
                            Europa
                        </Text>

                        <Text
                            mt="16px"
                            fontWeight="600"
                            fontSize="24px"
                            lineHeight="36px"
                            textAlign="center"
                            color="#DADADA"
                        >
                            O continente mais antigo.
                        </Text>

                        <Tooltip label="Mais informações do continente">
                            <Link
                                mt="8px"
                                fontWeight="500"
                                fontSize="24px"
                                lineHeight="36px"
                                textAlign="center"
                                color="#DADADA"
                                href={`/continent/europe`}
                            >
                                <RiEyeFill />
                            </Link>
                        </Tooltip>

                    </Flex>
                </SwiperSlide>


                <SwiperSlide>
                    <Flex
                        height={["250px", "450px"]}
                        backgroundImage={europe.src}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="600"
                            fontSize="48px"
                            lineHeight="72px"
                            textAlign="center"
                            color="#F5F8FA"
                        >
                            Europa
                        </Text>

                        <Text
                            mt="16px"
                            fontWeight="600"
                            fontSize="24px"
                            lineHeight="36px"
                            textAlign="center"
                            color="#DADADA"
                        >
                            O continente mais antigo.
                        </Text>

                        <Tooltip label="Mais informações do continente">
                            <Link
                                mt="8px"
                                fontWeight="500"
                                fontSize="24px"
                                lineHeight="36px"
                                textAlign="center"
                                color="#DADADA"
                                href={`/continent/europe`}
                            >
                                <RiEyeFill />
                            </Link>
                        </Tooltip>

                    </Flex>
                </SwiperSlide>



            </Swiper>
        </>
    );
}