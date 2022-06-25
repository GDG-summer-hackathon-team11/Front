import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import RunningCard from "./RunningCard";
import {useFlow} from "../Stack/stackflow";
import styled from "@emotion/styled";
import {useEffect, useRef, useState} from "react";
import {Pagination} from 'swiper';
import {css} from '@emotion/css'
import {useHistoryState} from "../History/HistoryStore";

interface RunningSwiperProps {
  places: any[]
}

const RunningSwiper = (props: RunningSwiperProps) => {
  const {push} = useFlow();
  const { id } = useHistoryState();
  const [swiper, setSwiper] = useState<any>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    swiper?.slideTo(props.places.findIndex(item => item.id === id) ?? 1)
  }, [id])

  if(!id) {
    return null;
  }

  return (
    <SwiperContainer ref={scrollerRef}>
      <Swiper
        onSwiper={setSwiper}
        className={css`
          --swiper-pagination-color: #6F7070
        `}
        initialSlide={props.places.findIndex(item => item.id === id) ?? 1}
        pagination
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {
          props.places.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <RunningCard key={index} place={item} onClick={() => {
                  push("DetailPage", {
                    id: item.id,
                  });
                }}/>
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
