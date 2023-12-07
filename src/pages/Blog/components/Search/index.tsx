import { ChangeEvent, useContext } from 'react'

import { SearchForm } from './styles'
import { ProfileContext } from '../../../../contexts/ProfileContext'

export function Search() {
  const { issues, fetchIssues } = useContext(ProfileContext)

  async function handleSearchIssues(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 3) {
      await fetchIssues(event.target.value)
    }
  }

  return (
    <SearchForm>
      <header>
        <strong>Posts</strong>
        <span>{issues.length} posts</span>
      </header>
      <input
        type="text"
        placeholder="Search content"
        onChange={handleSearchIssues}
      />
    </SearchForm>
  )
}
