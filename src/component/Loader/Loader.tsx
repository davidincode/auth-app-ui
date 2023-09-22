import { getRandomFunFact } from '../../util/dialog'

const Loader = () => {
  return (
    <div>
      <h4>Loading</h4>
      <p>{getRandomFunFact()}</p>
    </div>
  )
}

export default Loader
