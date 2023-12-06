import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileCardBox,
  ProfileCardContainer,
  ProfileCardFooter,
  ProfileCardHeader,
} from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'

export function ProfileCard() {
  const { profile } = useContext(ProfileContext)

  return (
    <ProfileCardContainer>
      <img src={profile.avatarUrl} alt="" />
      <ProfileCardBox>
        <ProfileCardHeader>
          <span>{profile.name || profile.login}</span>
          <a href={profile.url} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileCardHeader>
        <p>{profile.bio}</p>
        <ProfileCardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </span>

          {profile.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile.company}
            </span>
          )}
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} followers
          </span>
        </ProfileCardFooter>
      </ProfileCardBox>
    </ProfileCardContainer>
  )
}
