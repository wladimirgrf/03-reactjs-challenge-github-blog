import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import sideLeft from '../../assets/header-side-left.png'
import sideRight from '../../assets/header-side-right.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={sideLeft} alt="" />
      <img src={logoImg} alt="" />
      <img src={sideRight} alt="" />
    </HeaderContainer>
  )
}
