import {
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from './styles'

import logoImg from '../../assets/logo.svg'
import sideLeft from '../../assets/header-side-left.png'
import sideRight from '../../assets/header-side-right.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={sideLeft} alt="" />
      </HeaderLeft>
      <HeaderCenter>
        <img src={logoImg} alt="" />
      </HeaderCenter>
      <HeaderRight>
        <img src={sideRight} alt="" />
      </HeaderRight>
    </HeaderContainer>
  )
}
