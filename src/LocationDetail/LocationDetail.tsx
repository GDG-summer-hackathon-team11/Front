import styled from "@emotion/styled";
import RunningDifficulty from "../Running/RunningDifficulty";
import RunningMembers from "../Running/RunningMembers";
import JoinButton from "../Button/join";
import {PlaceDetailType} from "../Main/EvnetType";

interface LocationDetailProps {
  place: PlaceDetailType
}

const LocationDetail = (props:LocationDetailProps) => {
  return (
    <Containers>
      <HeaderContainer>
        <HeaderTitle>시작점 위치(주소)</HeaderTitle>
        <Label>{props.place.startPoint.name}</Label>
      </HeaderContainer>
      <Details>
        <Title>체크포인트</Title>
        <CheckPointContainer>
          {
            props.place.checkPoint.map(item => {
              return (
                <Label key={item.name}>{item.name}</Label>
              )
            })
          }
        </CheckPointContainer>
      </Details>
      <Details>
        <Title>난이도</Title>
        <RunningDifficulty difficult={props.place.level}/>
      </Details>
      <Details>
        <Title>인원</Title>
        <RunningMembers count={props.place.members.length}/>
      </Details>
      <Details>
        <Title>시간</Title>
        <Label>{props.place.date}</Label>
      </Details>
      <Details>
        <Title>나이대</Title>
        <Label>{props.place.ageCoverage}대</Label>
      </Details>
      <Details>
        <Title>관심사</Title>
      </Details>
      <JoinButton/>
    </Containers>
  );
}

const CheckPointContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderTitle = styled.h2`
  font-size: 1.3125rem;
  padding: 0;
  margin: 0;
`

const Title = styled.h3`
  font-size: 1.125rem;
  padding: 0;
  margin: 1.0625rem 0 0 0;
`

const Label = styled.label`
  margin-top: 0.5rem;
`

const Containers = styled.div`
  padding: 0.75rem 1rem;
`

const Details = styled.div`
`
export default LocationDetail;
