import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Img = styled.img.attrs({
  src: 'https://www.fiatprofessional.com/content/dam/moc/common/404-error/mobile/mobile_404.png',
  alt: ''
})`
  height: 100%;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`

const PageNotFound: FC = (): ReactElement => {
  return (
    <Container>
      <Img />
    </Container>
  )
}

export { PageNotFound }
