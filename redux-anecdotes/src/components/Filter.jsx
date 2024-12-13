import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'  

const VisibilityFilter = () => {
  const style = {
    marginBottom: 10
  }
  
  const dispatch = useDispatch()
  const handleChange = (event) => {  
    const filter = event.target.value
    dispatch(setFilter(filter))
  }
  

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
      <hr />
    </div>
  )
}

export default VisibilityFilter