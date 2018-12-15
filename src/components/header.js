import React from 'react';
import Prp from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Header = (props) => {
	return(
<nav className="navbar navbar-expand-md navbar-light bg-info" >
<div className = "container-fluid">
<Link to="/" className="navbar-brand">Sesnaco</Link>
<button type="button" className = "navbar-toggler" data-target = "navbarResponsive">
<span className = "navbar-toggler-icon">
</span>
</button>
<div className = "collapse navbar-collapse" id = "navbarResponsive">
<ul className="navbar-nav ml-auto">
<li className="nav-item">
<a href="#" className="nav-link">Hello</a>
</li>
<li className="nav-item">
<Link to="/forms" className="nav-link">Form</Link>
</li>
<li className="nav-item">
<a href="#" className="nav-link">Hello</a>
</li>
<li className="nav-item">
<a href="#" className="nav-link">Hello</a>
</li>
</ul>
</div>
</div>
		</nav>
	);

}
Header.defaultprops = {
	branding: 'welcome to manager'
};
Header.propTypes = {
	branding: Prp.string.isRequired

};
export default Header;
