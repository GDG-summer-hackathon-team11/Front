import styled from "@emotion/styled";
import RunningDifficulty from "./RunningDifficulty";
import RunningMembers from "./RunningMembers";
import { useSwiperSlide } from 'swiper/react';
import {useEffect} from "react";
import {useMap} from "../Map/useMap";
import {useHistoryActions} from "../History/HistoryStore";

interface RunningCardProps {
  onClick: () => void
  place:any
  // title: string
  // time:string
  // member: string
  // interestCount: number
  // ageRange: string
}

const RunningCard = (props:RunningCardProps) => {
  const swiperSlide = useSwiperSlide();
  const map = useMap()
  const { setSelectedId } = useHistoryActions()

  useEffect(() => {
    if(swiperSlide.isActive) {
      // 지도 중심을 이동 시킵니다
      map.setCenter(props.place.position);
      map.setLevel(4)
      setSelectedId(props.place.id)
    }
  }, [swiperSlide.isActive, map, props.place.id, props.place.position, setSelectedId])

  return (
    <Article onClick={props.onClick}>
      <Header>
        <Title>메인 페이지</Title>
        <RunningDifficulty difficult={2}/>
      </Header>
      <Time>시간 18:00</Time>
      <Members>
        <MemberTitle>인원</MemberTitle>
        <RunningMembers count={3} />
      </Members>
      <Interest>관심사</Interest>
      <Age>나이대</Age>
    </Article>
  )
}

const Header = styled.section`
  display: flex;
`

const Title = styled.h2`
  font-size: 1rem;
  margin: 0 0.5625rem 0 0;
  padding: 0;
`

const Time = styled.label`
  margin-top: 0.78125rem;
`

const Members = styled.div`
  display: flex;
  margin-top: 0.46875rem;
`

const MemberTitle = styled.label`
  margin-right: 0.5625rem;
`

const Interest = styled.div`
  margin-top: 0.46875rem;
`

const Age = styled.div`
  margin-top: 0.46875rem;
`

const Article = styled.article`
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //position: fixed;
  //
  margin: 2rem 1rem;
  //bottom: 1rem;
  //z-index: 2;
  padding: 0.875rem 1.375rem 0.4375rem;
  //
  box-shadow: 2px 3px 6px #00000029;
  background-color: white;
  border-radius: 1.25rem;
`

export default RunningCard
