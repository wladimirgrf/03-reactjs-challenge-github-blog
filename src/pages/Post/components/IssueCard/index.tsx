import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'

import { IssueCardContainer, IssueCardFooter, IssueCardHeader } from './styles'

interface IssueCardProps {
  title: string
  url: string
  author: string
  numberOfComments: number
  createdAt: Date
}

export function IssueCard(props: IssueCardProps) {
  return (
    <IssueCardContainer>
      <IssueCardHeader>
        <NavLink to="/">
          <FontAwesomeIcon size="sm" icon={faChevronLeft} />
          BACK
        </NavLink>
        <a href={props.url} target="_blank" rel="noreferrer">
          ON GITHUB
          <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
        </a>
      </IssueCardHeader>
      <h1>{props.title}</h1>
      <IssueCardFooter>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {props.author}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatDistanceToNow(props.createdAt, { addSuffix: true })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} /> {props.numberOfComments} comments
        </span>
      </IssueCardFooter>
    </IssueCardContainer>
  )
}
