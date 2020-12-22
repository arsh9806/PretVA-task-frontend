import React, { useState } from 'react';
import './Topbar.css';
import { Navbar, Nav, Form } from 'react-bootstrap';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Topbar() {
	const [selectedRoute, setSelectedRoute] = useState(3);
	return (
		<div className="row">
			<div className="col-md-12">

				<Navbar className="navbar border-10 px-0" expand="lg" sticky="top">

					<Navbar.Brand href="#home">
						<img id="brand-image" src="pretva.png" alt="PretVA" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />

					<Navbar.Collapse id="basic-navbar-nav">

						<Nav className="mx-auto">
							<Nav.Link onClick={() => setSelectedRoute(1)} className={`px-4 ${selectedRoute === 1 ? 'active' : ''}`} >About</Nav.Link>
							<Nav.Link onClick={() => setSelectedRoute(2)} className={`px-4 ${selectedRoute === 2 ? 'active' : ''}`} >Services</Nav.Link>
							<Nav.Link onClick={() => setSelectedRoute(3)} className={`px-4 ${selectedRoute === 3 ? 'active' : ''}`} >Search</Nav.Link>
							<Nav.Link onClick={() => setSelectedRoute(4)} className={`px-4 ${selectedRoute === 4 ? 'active' : ''}`} >Feedback & Support</Nav.Link>
						</Nav>


						<Form inline className="mr-0 align-items-lg-center">
							<NotificationsNoneIcon className="d-none d-lg-block bell-icon mr-1" />
							<Nav.Link id="myAccount" className="ml-4 mr-2 my-2 ml-lg-1 mr-lg-1 rounded-border">My Account
							<ArrowDropDownIcon />
							</Nav.Link>
							<Nav.Link id="logout__button" className="mx-lg-2 rounded-border">Log out</Nav.Link>
						</Form>


					</Navbar.Collapse>

				</Navbar>

				<br />
			</div>
		</div>
	)
}

export default Topbar
