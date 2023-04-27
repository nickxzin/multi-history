import styles from './NavBar.module.css'
import logo from '../imgs/logo.png'

function NavBar(){
    return(
        <header>
            <a href="#" className={styles.logo}><img src={logo} alt="" /></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Historia</a></li>
                <li><a href="#">Adicionais</a></li>
            </ul>
            <div className={styles.search}>
                <input type="text" placeholder='Search'/>
            </div>
        </header>
    )
}

export default NavBar;