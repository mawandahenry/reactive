import React from 'react'
import {Link} from 'react-router-dom';

const Header = (props) => {
return(
  <div>

<div className = "navbar navbar-expand-md navbar-info bg-info">
<div className = "container-fluid">
<Link to="/" className="navbar-brand">Naco</Link>
<div className = "collapse navbar-collapse">
<ul className="navbar-nav ml-auto">
<li className="nav-item">
<a href="#" className="nav-link">wasswa</a>
</li>
</ul>
</div>
</div>
</div>
  </div>
  )
}
export default Header;
