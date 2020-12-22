import React from 'react'
import './Footer.css';
import { Row, Col, Container } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
	return (
		<div className="footer pt-4 mt-3">
			<Row className="main-footer">
				<Container >
					<Row className="p-5">

						<Col md="3" className="mb-3">
							<h2>Get In Touch!</h2>
						</Col>
						<Col md="3">
							<h4>Location</h4>
							<p>	Bengaluru, Karnataka, India </p>
						</Col>
						<Col md="3">
							<h4>Contact</h4>
							<p>support@pretva.com</p>

						</Col>
						<Col md="3">
							<h4>Follow</h4>
							<p>
								<FacebookIcon className="mr-3"/>
								<InstagramIcon className="mr-3"/>
								<LinkedInIcon className="mr-3"/>
							</p>
						</Col>
					</Row>

				</Container>
			</Row>
			<Row className>
				<Container className="mr-5">
					<p className="my-3">
						<CopyrightIcon />2020 by PretVA
					</p>
				</Container>
			</Row>
		</div>
	)
}

export default Footer
