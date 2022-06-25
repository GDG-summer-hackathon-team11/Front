import MemberActiveIcon from "../_assets/member_active.png";
import MemberIcon from "../_assets/member.png";
import styled from "@emotion/styled";

interface RunningMembersProps {
  count: number
}

const MAX_MEMBER_COUNT = 6;

const RunningMembers = (props:RunningMembersProps) => {
  return (
    <Container>
      {
        Array.from({length: MAX_MEMBER_COUNT}).map((item, index) => {
          if(props.count >= index + 1) {
            return <Icon key={index} src={MemberActiveIcon}/>
          }

          return (
            <Icon key={index} src={MemberIcon}/>
          )
        })
      }
    </Container>
  )
}


const Container = styled.div`

`

const Icon = styled.img`
  width: 1.5rem;
  height: 1.125rem;
  margin-right: 0.354375rem;
  
  &:last-child {
    margin-right: 0;
  }
`

export default RunningMembers
