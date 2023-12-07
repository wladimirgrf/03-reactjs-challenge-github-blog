import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

import { PostCardContainer, PostCardTitle } from './styles'
import { Issue } from '../../../../contexts/ProfileContext'

interface PostCardProps extends Issue {}

export function PostCard(props: PostCardProps) {
  const { title, body, createdAt } = props
  const navigate = useNavigate()

  const formattedTitle =
    title.length > 32 ? title.substring(0, 32).trimEnd().concat('...') : title

  const formattedBody =
    body.length > 170 ? body.substring(0, 170).trimEnd().concat('...') : body

  function handleCardClick() {
    navigate('/post', { state: props })
  }

  return (
    <PostCardContainer onClick={handleCardClick}>
      <PostCardTitle>
        <h3>{formattedTitle}</h3>
        <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
      </PostCardTitle>
      <p>{formattedBody}</p>
    </PostCardContainer>
  )
}
