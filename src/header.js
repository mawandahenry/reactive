import React from 'react';
import Prp from 'prop-types';
import 'react-bootstrap/css /bootstrap.min.css';

const Header = (props) => {
	return(

<nav className = "navbar navbar-expand-sm navbar-dark bg-primary mb-4 py-0">
<div className = "container">
<a href = "/" className = "navbar-brand">{props.branding}</a>
<div>
<ul className = "navbar-nav mr-auto">
<li className = "nav-item"><a href = "/" className = "nav-link">Manage</a></li>
<li className = "nav-item"><a href = "/" className = "nav-link">proc</a></li>
<li className = "nav-item"><a href = "/" className = "nav-link">Dev</a></li>
<li className = "nav-item"><a href = "/" className = "nav-link">fs</a></li>

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