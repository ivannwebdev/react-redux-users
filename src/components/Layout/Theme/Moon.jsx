import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg.attrs({
  viewBox: '0 0 24 24'
})`
  opacity: ${ props => props.theme.name === 'dark' ? 0 : 1 };
  position: absolute;
  width: 30px;
  top: 10px;
  left: 85px;
  z-index: 100;
  fill: #7e7e7e;
  transition: 0.3s;
`
function Moon() {
  return (
    <Svg>
      <path
        d="M3.32031
        11.6835C3.32031
        16.6541 7.34975
        20.6835 12.3203
        20.6835C16.1075
        20.6835 19.3483
        18.3443 20.6768
        15.032C19.6402
        15.4486 18.5059
        15.6834 17.3203
        15.6834C12.3497
        15.6834 8.32031
        11.654 8.32031
        6.68342C8.32031
        5.50338 8.55165
        4.36259 8.96453
        3.32996C5.65605
        4.66028 3.32031
        7.89912 3.32031
        11.6835Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export { Moon }
