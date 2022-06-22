import React, { useRef, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import europe from '../assets/europe.png';



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
                        height="450px"
                        backgroundImage={europe.src}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="48px"
                            lineHeight="72px"
                            textAlign="center"
                            color="#F5F8FA"
                        >
                            Europa
                        </Text>

                        <Text
                            mt="16px"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="36px"
                            textAlign="center"
                            color="#DADADA"
                        >
                            O continente mais antigo.
                        </Text>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        height="450px"
                        backgroundImage={europe.src}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="48px"
                            lineHeight="72px"
                            textAlign="center"
                            color="#F5F8FA"
                        >
                            Europa
                        </Text>

                        <Text
                            mt="16px"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="36px"
                            textAlign="center"
                            color="#DADADA"
                        >
                            O continente mais antigo.
                        </Text>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        height="450px"
                        backgroundImage={europe.src}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="48px"
                            lineHeight="72px"
                            textAlign="center"
                            color="#F5F8FA"
                        >
                            Europa
                        </Text>

                        <Text
                            mt="16px"
                            fontWeight="700"
                            fontSize="24px"
                            lineHeight="36px"
                            textAlign="center"
                            color="#DADADA"
                        >
                            O continente mais antigo.
                        </Text>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </>
    );
}