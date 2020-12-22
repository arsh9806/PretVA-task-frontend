import './InfoCards.css';
import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import axios from '../../axios';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useDataLayerValue } from "../../StateManagement/Datalayer";
import { CircularProgress } from '@material-ui/core';




function InfoCards() {
	const [cards, setCards] = useState([]);
	const [{ filters }, dispatch] = useDataLayerValue();



	useEffect(() => {
		setCards([]);
		(async function abc() {
			let url = "";
			if (new Set(filters).size !== 1) {
				if (filters[0]) {
					url += url === "" ? "?" : "&";
					url += `buyerName=${filters[0]}`;
				}
				if (filters[1]) {
					url += url === "" ? "?" : "&";
					url += `sortBy=${filters[1]}`;
				}
				if (filters[2]) {
					url += url === "" ? "?" : "&";
					url += `productName=${filters[2]}`;
				}
				const data = await axios.get(`/buyers${url}`);
				if(data.data.length !== 0 ){
					setCards(data.data);

				}
				else{
					setCards(0);
				}
			}
			else {
				const data = await axios.get(`/buyers`);
				setCards(data.data);
				let products = new Set();
				data.data.forEach(product => {
					products.add(product.product_name);
				});
				dispatch({
					type: 'SET_PRODUCTS',
					products: Array.from(products)
				})
			}


		})();
	}, [filters,dispatch])


	return (
		<Row className="infoCards" >

			{
				cards ? cards.length === 0 ? <CircularProgress className="mx-auto mt-4 loading"/>  : 
					cards.map((card, index) => (
						<Col key={index} lg="4" md="6" className="my-3">
							<div className="info-card p-lg-4 p-3">
								<Row className="mb-1">
									<Col xs="5">
										<img className="avatar-image" src="https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png" alt="Avatar" />
									</Col>
									<Col className="p-1 buyer-basic-info">
										<strong><p className="mb-1">{card.buyer_name}</p></strong>
										<p>Buyer, Sunshine Apparel Pvt. Ltd.</p>
										<p>Bangalore, Karnataka, India</p>
									</Col>
								</Row>
								<Row className="mb-1">
									<Col xs="5">
										<strong><p>Requirements:</p></strong>
									</Col>
									<Col className="pl-0">
										<span>Posted : March 2, 2020<br />
						Expires : July 2, 2020</span>
									</Col>
								</Row>
								<Row className="mb-1">
									<Col>
										<p><strong>Fabric : </strong>{card.product_name}</p>
									</Col>
								</Row>
								<Row className="mb-1">
									<Col>
										<p><strong>Weight : </strong>{card.weight_gsm}gms</p>
									</Col>
									<Col className="text-center">
										<p><strong>Quantity : </strong>{card.quantity}</p>
									</Col>
									<p></p>
								</Row>
								<Row className="mb-1">
									<Col>
										<p><strong>Cost Bracket : </strong>INR {card.price_rs} / mtr</p>
									</Col>
								</Row>
								<Row className="mb-1">
									<Col>
										<p><strong>Lead Time Provision : </strong>1 - 2 months</p>
									</Col>
								</Row>
								<Row className="mb-1">
									<Col>
										<p><strong>Delivery Location : </strong>New Delhi, India</p>
									</Col>
								</Row>
								<Row >
									<Col className="d-flex justify-content-between py-3 pt-4">
										<PermIdentityIcon fontSize="large" />
										<ChatBubbleOutlineIcon fontSize="large" />
										<ShareIcon fontSize="large" />
										<BookmarkBorderIcon fontSize="large" />
									</Col>
								</Row>

							</div>
						</Col>
					)) : <h2 className="mx-auto">No Data Found :(</h2>
			}

		</Row>
	)
}

export default InfoCards
