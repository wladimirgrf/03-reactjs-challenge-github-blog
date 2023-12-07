import { formatDistanceToNow } from 'date-fns'

import { PostCardContainer, PostCardTitle } from './styles'

interface PostCardProps {
  title: string
  body: string
  createdAt: Date
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  const formattedTitle =
    title.length > 32 ? title.substring(0, 32).trimEnd().concat('...') : title

  const formattedBody =
    body.length > 170 ? body.substring(0, 170).trimEnd().concat('...') : body

  return (
    <PostCardContainer>
      <PostCardTitle>
        <h3>{formattedTitle}</h3>
        <span>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
          })}
        </span>
      </PostCardTitle>
      <p>{formattedBody}</p>
    </PostCardContainer>
  )
}
