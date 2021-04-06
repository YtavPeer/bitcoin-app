import { NavLink, withRouter } from 'react-router-dom'
import logoHome from '../../assets/icon/home.png'
import logoContact from '../../assets/icon/users.png'
import logoStatistic from '../../assets/icon/increase.png'
import './HeaderCmp.scss'

export const HeaderCmp = ({ onSelectPage }) => {

    return (
        <div className="app-header">
            <h1>Bitcoin app</h1>
            <ul className="navbar-header">
                <img src="../../../assets/icon/home.png" alt="" />
                <li><NavLink exact to="/" activeClassName="active-nav"><img src={logoHome} alt="" /></NavLink></li>
                <li><NavLink to="/contact" activeClassName="active-nav"><img src={logoContact} alt="" /></NavLink></li>
                <li><NavLink to="/Statistic" activeClassName="active-nav"><img src={logoStatistic} alt="" /></NavLink></li>
            </ul>
        </div>
    )
}

