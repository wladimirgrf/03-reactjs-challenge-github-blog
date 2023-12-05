import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileCardContainer,
  ProfileBox,
  ProfileFooter,
  ProfileHeader,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://github.com/wladimirgrf.png" alt="" />
      <ProfileBox>
        <ProfileHeader>
          <span>Wladimir F</span>
          <a
            href="https://github.com/wladimirgrf"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </ProfileFooter>
      </ProfileBox>
    </ProfileCardContainer>
  )
}
