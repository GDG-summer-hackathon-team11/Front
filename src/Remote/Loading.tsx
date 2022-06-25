import IconLoading from '../_assets/loading.gif'
import styled from "@emotion/styled";

const Loading = () => {
  return (
    <Container>
      <LoadingImage src={IconLoading} alt={"로딩중"}/>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingImage = styled.img`
  width: 5.125rem;
  height: 2.875rem;
`

export default Loading
