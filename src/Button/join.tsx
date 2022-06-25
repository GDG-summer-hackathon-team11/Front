import styled from "@emotion/styled";

const JoinButton = () => {
  return (
    <Button>
      참여하기
    </Button>
  );
}


const Button = styled.button`
  display: flex;
  margin: auto;
  text-align: center;
  background-color: #1B431A;
  color: white;
  cursor: pointer;
  padding: 1.25rem 8.125rem;
  border-radius: 1.0625rem;
`

export default JoinButton;
