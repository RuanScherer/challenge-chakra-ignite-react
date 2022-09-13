import { Box } from "@chakra-ui/react"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SelectorSlide } from "./SelectorSlide"

export function ContinentSelector() {
  return (
    <Box width="full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <SelectorSlide
            imageUrl="/europe.svg"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <SelectorSlide
            imageUrl="/south-america.svg"
            title="América do Sul"
            description="Um continente rico em cultura."
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <SelectorSlide
            imageUrl="/north-america.svg"
            title="América do Norte"
            description="Terra das cidades mais famosas."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectorSlide
            imageUrl="/asia.svg"
            title="Ásia"
            description="Conheça a cultura oriental."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectorSlide
            imageUrl="/africa.svg"
            title="África"
            description="Um dos maiores continentes."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectorSlide
            imageUrl="/oceania.svg"
            title="Oceania"
            description="Conheça as mais diferentes ilhas."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
