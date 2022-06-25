import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import RunningCard from "./RunningCard";
import {useFlow} from "../Stack/stackflow";
import {useHistoryState} from "../History/HistoryStore";
import styled from "@emotion/styled";
import {useEffect, useRef} from "react";
import {Navigation, Pagination, Scrollbar, Thumbs} from 'swiper';

const RunningSwiper = () => {
  const { push } = useFlow();
  const { id } = useHistoryState();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    push("DetailPage", {
      id: id,
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const onTouch = (e: TouchEvent) => {
      e.stopPropagation()
    }

    scroller.addEventListener('touchstart', onTouch)
    scroller.addEventListener('touchmove', onTouch)
    scroller.addEventListener('touchend', onTouch)

    return () => {
      scroller.removeEventListener('touchstart', onTouch)
      scroller.removeEventListener('touchmove', onTouch)
      scroller.removeEventListener('touchend', onTouch)
    }
  }, [scrollerRef])

  return (
    <SwiperContainer ref={scrollerRef}>
    <Swiper
      className="mySwiper"
      // install Swiper modules
      pagination={true}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        Array.from({ length: 5}).map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <RunningCard key={index} onClick={handleClick}/>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </SwiperContainer>
  )
}

const SwiperContainer = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  //box-shadow: 2px 3px 6px #00000029;
  //background-color: white;
  //border-radius: 1.25rem;
  //min-height: 4rem;
`

export default RunningSwiper
