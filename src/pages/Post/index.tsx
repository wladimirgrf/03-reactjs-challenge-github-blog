import { useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'

import { IssueCard } from './components/IssueCard'
import { PostBody, PostContainer } from './styles'

import { Issue } from '../../contexts/ProfileContext'

interface PostProps extends Issue {}

export function Post() {
  const location = useLocation()
  const { title, body, createdAt, numberOfComments, author, url } =
    location.state as PostProps

  return (
    <PostContainer>
      <IssueCard
        title={title}
        numberOfComments={numberOfComments}
        url={url}
        author={author}
        createdAt={createdAt}
      />
      <PostBody>
        <div>
          <Markdown>{body}</Markdown>
        </div>
      </PostBody>
    </PostContainer>
  )
}
