import Markdown from 'react-markdown'
import { IssueCard } from './components/IssueCard'
import { PostBody, PostContainer } from './styles'

export function Post() {
  const markdown = '# Hi, *Pluto*!'

  return (
    <PostContainer>
      <IssueCard />
      <PostBody>
        <Markdown>{markdown}</Markdown>
      </PostBody>
    </PostContainer>
  )
}
