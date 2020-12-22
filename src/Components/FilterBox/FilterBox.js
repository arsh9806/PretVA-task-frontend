import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';

import './FilterBox.css';
import { useDataLayerValue } from '../../StateManagement/Datalayer';

export default function FilterBox() {

	const [selectedButton, setSelectedButton] = useState(2);
	const [productName, setProductName] = useState("")
	const [sortBy, setSortBy] = useState("")
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const [{ products, filters }, dispatch] = useDataLayerValue();
	const [buyerName, setBuyerName] = useState("")

	// -------------------------------
	function setBuyersNameFilter() {
		if (buyerName !== "") {
			let temp = filters;
			temp[0] = buyerName;
			dispatch({
				type: 'SET_FILTERS',
				filters: [...temp]
			})
		}
		else {
			let temp = filters;
			temp[0] = 0;
			dispatch({
				type: 'SET_FILTERS',
				filters: [...temp]
			});
		}
	}

	function setProductNameFilter(e) {
		setProductName(e.target.innerText)
		setToggleDropdown(!toggleDropdown);
	}


	function setSortByFilter(e) {
		if (e.target.innerText === "Cost") {
			setSortBy("price_rs");
		}
		else if (e.target.innerText === "Quantity") {
			setSortBy("quantity");
		}
	}
	// ----------------------------------


	function setSortAndProduct() {
		let temp = filters;
		if (sortBy !== "") {
			temp[1] = sortBy;

		}
		else {
			temp[1] = 0;
		}

		if (productName !== "") {
			temp[2] = productName;
		}
		else {
			temp[2] = 0;
		}
		dispatch({
			type: 'SET_FILTERS',
			filters: [...temp]
		})

	}
	function handleChange(e) {
		setBuyerName(e.target.value)
	}

	function removeFilter(i) {
		if (i === 'clear') {
			setProductName("");
			setSortBy("");
			setBuyerName("");
			dispatch({
				type: 'SET_FILTERS',
				filters: [0, 0, 0]
			})
		}
		else {
			let temp = filters;
			let toRemove = filters.indexOf(i)
			temp[toRemove] = 0;
			if (toRemove === 0) {
				setBuyerName("");
			}
			else if (toRemove === 1) {
				setSortBy("");
			}
			else {
				setProductName("");
			}

			dispatch({
				type: 'SET_FILTERS',
				filters: [...temp]
			})
		}
		
	}

	return (
		<div className="FilterBox">
			{/* BreadCrumb */}
			<Row className="mx-0">
				<Col>
					<div className="breadCrumb">
						<p><strong>Search / </strong> Search Buyer Requirements </p>
					</div>
				</Col>
			</Row>

			{/* Buttons */}

			<Row className="mx-0">
				<Col className="d-flex justify-content-center align-items-center">
					<button onClick={() => setSelectedButton(1)} id="supplierButton" className={`mr-2 p-3 filterButtons ${selectedButton === 1 && 'selected'}`}>
						Search Supplier Products
						</button>
					<button onClick={() => setSelectedButton(2)} id="buyerButton" className={`p-3 filterButtons ${selectedButton === 2 && 'selected'}`}>
						Search Buyer Requirements
						</button>
				</Col>
			</Row>

			{/* Filters */}
			<Row className="justify-content-center mt-5 mx-0">
				<Col lg="9" className="filters">
					<h5>Search Filters</h5>
					<div className="filter-options d-flex align-items-baseline justify-content-around flex-wrap flex-md-nowrap">
						<div className="dropdown-items">
							<p className="dropdown-toggle" id="dropdownMenuButton" onClick={() => setToggleDropdown(!toggleDropdown)}>
								{productName !== "" ? productName : 'Products'}<ArrowDropDownIcon />
							</p>
							<div className={`dropdown-menu ${toggleDropdown && 'd-block'}`} aria-labelledby="dropdownMenuButton">
								{
									products.map((product, index) => {

										return <p  key={index} onClick={setProductNameFilter} className="dropdown-item">{product}</p>
									}
									)
								}
							</div>
						</div>
						<div onClick={setSortByFilter} className={`dropdown-items ${sortBy === "price_rs" ? 'active' : ''}`}>
							<p>Cost
							</p>
						</div>
						<div onClick={setSortByFilter} className={`dropdown-items ${sortBy === "quantity" ? 'active' : ''}`}>
							<p>Quantity
							</p>
						</div>
						<div className="dropdown-items immutable">
							<p>Ratings
							</p>
						</div>
						<div className="dropdown-items immutable">
							<p>Location
							</p>
						</div>
						<div onClick={setSortAndProduct} className="dropdown-items">
							<button id="apply-filters-button" className="mx-auto">
								Apply Filters
							</button>
						</div>
					</div>
				</Col>
			</Row>
			<Row className="justify-content-center mt-5 mx-0">

				<Col lg="9" className="px-0">
					<Row className="mx-0">
						<Col className="px-0">
							<InputGroup className="mb-3 pr-md-2">
								<InputGroup.Prepend>
									<InputGroup.Text id="basic-addon1">&nbsp;&nbsp;&nbsp;</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									placeholder="Search for keyword"
									value={buyerName}
									aria-label="Username"
									onChange={handleChange}
									aria-describedby="basic-addon1"
								/>
							</InputGroup>
						</Col>
						<Col md="4" className="px-0">
							<button id="post-product-req" onClick={setBuyersNameFilter} className="d-flex justify-content-center m-auto w-100">
								Post Product Requirement
							</button>
						</Col>
					</Row>
				</Col>

			</Row>
			<Row id="applied-filters" className="align-items-center">
				<p className="mb-1 pr-2">Search filters : </p>
				<div className="applied-filters__filters d-flex flex-wrap">

					{
						filters.map((filter, i) => {

							if (filter) {
								return (<div key={i} className="pill">
									<p className="mb-0">{filter === 'price_rs' ? 'Cost' : filter} <CloseIcon onClick={() => removeFilter(filter)} /></p>
								</div>)
							}
							else {
								return "";
							}
						})
					}
					{
						filters[0] === filters[1] && filters[1] === filters[2] ? '--' : (
							<div className="pill dark-pill">
								<p className="mb-0">Clear All <CloseIcon onClick={() => removeFilter('clear')} /></p>
							</div>
						)
					}

				</div>

			</Row>


		</div>
	)
}
