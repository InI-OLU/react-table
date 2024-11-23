import Icon from '../../assets/svg/search.svg'
import './searchbar.css'
const Searchbar = () => {
  return (
    <div className='searchbar'>
      <img src={Icon} alt="Search-bar" />
      <input type="text" name='search' placeholder='Search or type any commands'/>
    </div>
  )
}

export default Searchbar