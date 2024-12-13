import { useDispatch, useSelector } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    }
    return state.filter !== ''
      ? [...state.anecdotes]
        .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
      : [...state.anecdotes].sort((a, b) => b.votes - a.votes)
  })

  const vote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(addVoteTo(id))
    const notificationContent = anecdote.content.split(' ').slice(0, 5).join(' ') + '...'
    dispatch(setNotificationWithTimeout(`You voted '${notificationContent}'`, 5000))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
    )}
    </div>
  )
}

export default AnecdoteList