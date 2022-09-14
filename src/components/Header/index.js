import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsBagFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <ul className="tab-icon-container">
        <li>
          <Link to="/">
            <AiFillHome className="tab-icon" />
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <BsBagFill className="tab-icon" />
          </Link>
        </li>
        <li>
          <button
            className="log-out-icon-btn"
            type="button"
            onClick={onClickLogout}
          >
            <FiLogOut className="tab-icon" />
          </button>
        </li>
      </ul>
      <ul className="tabs-container">
        <li className="tab-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="tab-item">
          <Link className="nav-link" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
      <button className="logout-btn" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
