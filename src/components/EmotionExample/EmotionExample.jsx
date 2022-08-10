/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const color = 'white'
const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some Hotpink Text.
        {children}
    </div>
)

const anotherStyle = css({
    textDecoration: 'underline'
})

const AnotherComponent = () => (
    <div css={anotherStyle}>
        Some text with an underline.
    </div>
)

const base = css`
    background-color: #fff;
    color: red;
    border: 1px solid #ddd;
`

const bgRed = css`
    background-color: red;
    color: #fff;
`
const bgGreen = css`
    background-color: green;
    color: #fff;
`

export default function EmotionExample() {
  return (
      <>
        <div css={base}>Base Set</div>
        <div css={[base, bgRed]}>First base</div>
        <div css={[bgRed, base, bgGreen]}>First bgRed</div>

        <SomeComponent>
            <AnotherComponent />
        </SomeComponent>

        <div
            css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px; 
            border-radius: 4px;
            &:hover {
                color: ${color};
                }
            `}
        >
            Hover to change color.
        </div>

        <Button>Hello!</Button>

    </>
  )
}
