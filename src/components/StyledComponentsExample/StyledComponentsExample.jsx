import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 4em;
  background-color: deepskyblue;
`

const Title = styled.div`
  font-size: 2me;
  text-align: center;
  color: #fff;
`

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'deepskyblue' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'deepskyblue')};
  font-size: 2em;
  margin: 2em;
  padding: 0.5em 2em;
  border: 2px solid deepskyblue;
  border-radius: 3px;
`

const OrangeButton = styled(Button)`
  background-color: ${(props) => (props.primary ? 'orangered' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'orangered')};
  border: 2px solid orangered;
`

const OrangeWrapper = styled(Wrapper)`
  background-color: orange;
`

const StyledComponentsExample = () => {
  return (
    <>
      <Wrapper>
        <Title>Hello, World!</Title>
      </Wrapper>

      <OrangeButton>Normal</OrangeButton>
      <OrangeButton primary>Primary</OrangeButton>

      <OrangeWrapper>
        <Title>Hello, World!</Title>
      </OrangeWrapper>
    </>
  )
}

export default StyledComponentsExample
