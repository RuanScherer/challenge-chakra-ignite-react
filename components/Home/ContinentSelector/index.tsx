import { Box } from "@chakra-ui/react"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SelectorSlide } from "./SelectorSlide"

interface ContinentSelectorProps {
  onSelect: (selectedContinentSlug: string) => any
}

export function ContinentSelector({ onSelect }: ContinentSelectorProps) {
  return (
    <Box width="full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
      >
        <SwiperSlide onClick={() => onSelect("europe")}>
          <SelectorSlide
            imageUrl="/continents/europe.svg"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        
        <SwiperSlide onClick={() => onSelect("south-america")}>
          <SelectorSlide
            imageUrl="/continents/south-america.svg"
            title="América do Sul"
            description="Um continente rico em cultura."
          />
        </SwiperSlide>
        
        <SwiperSlide onClick={() => onSelect("north-america")}>
          <SelectorSlide
            imageUrl="/continents/north-america.svg"
            title="América do Norte"
            description="Terra das cidades mais famosas."
          />
        </SwiperSlide>

        <SwiperSlide onClick={() => onSelect("asia")}>
          <SelectorSlide
            imageUrl="/continents/asia.svg"
            title="Ásia"
            description="Conheça a cultura oriental."
          />
        </SwiperSlide>

        <SwiperSlide onClick={() => onSelect("africa")}>
          <SelectorSlide
            imageUrl="/continents/africa.svg"
            title="África"
            description="Um dos maiores continentes."
          />
        </SwiperSlide>

        <SwiperSlide onClick={() => onSelect("oceania")}>
          <SelectorSlide
            imageUrl="/continents/oceania.svg"
            title="Oceania"
            description="Conheça as mais diferentes ilhas."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
