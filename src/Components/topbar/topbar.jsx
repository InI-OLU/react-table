import Logo from '../../Assets/svg/logo.svg'
import './topbar.css'
import Searchbar from '../../utils/Searchbar/searchbar'
import Avatar from '../../utils/Avatar/Avatar'
const Topbar = () => {
	return(
     <div className = 'topbar'>
     	<img src ={Logo} alt = 'Fixit Logo' />

     	<Searchbar/>

     	<Avatar/>
     </div>
		)
}
export default Topbar