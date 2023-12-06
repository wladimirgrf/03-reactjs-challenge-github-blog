import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { IssueCardContainer, IssueCardFooter, IssueCardHeader } from './styles'

export function IssueCard() {
  return (
    <IssueCardContainer>
      <IssueCardHeader>
        <NavLink to="/">
          <FontAwesomeIcon size="sm" icon={faChevronLeft} />
          BACK
        </NavLink>
        <a
          href="https://github.com/wladimirgrf"
          target="_blank"
          rel="noreferrer"
        >
          ON GITHUB
          <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
        </a>
      </IssueCardHeader>
      <h1>JavaScript data types and data structures</h1>
      <IssueCardFooter>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          At 1 day
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} /> 5 comments
        </span>
      </IssueCardFooter>
    </IssueCardContainer>
  )
}
