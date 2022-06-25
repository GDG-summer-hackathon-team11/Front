import styled from "@emotion/styled";
import RunningIcon from '../_assets/running.png';
import RunningActiveIcon from '../_assets/running_active.png';

interface RunningDifficultyProps {
  difficult: number
}

const RunningDifficulty = (props:RunningDifficultyProps) => {
  return (
    <Container>
      {
        Array.from({length: 3}).map((item, index) => {
          if(props.difficult >= index + 1) {
            return <Icon src={RunningActiveIcon}/>
          }

          return (
            <Icon src={RunningIcon}/>
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`

`

const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  
  &:last-child {
    margin-right: 0;
  }
`

export default RunningDifficulty

