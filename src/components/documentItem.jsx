import React, { Component } from "react";
import { Link } from "react-router-dom";

class DocumentItem extends Component {
	constructor(props) {
		super(props);
		this.state.document = this.props.item;
	}

	state = {
		document: {}
	};

	render() {
		return (
			<div className='row'>
				<div className='col-sm'>{this.state.document.title}</div>
				<div className='col-sm'>{this.state.document.subject}</div>
				<div className='col-sm'>{this.state.document.description}</div>
				<div className='col-sm'>{this.state.document.identifier}</div>
				<div className='col-sm'>{this.state.document.type}</div>
				<div className='col-sm'>{this.state.document.coverage}</div>
				<div className='col-sm'>
					{this.state.document.date.substring(0, 10)}
				</div>
				<div className='col-sm'>
					<Link to={"/update/" + this.state.document._id}>
						<img src='img/edit.png' alt='editar' border='0' width='30' />
					</Link>
					&nbsp;&nbsp;
					<a
						href='#'
						onClick={() => {
							this.props.deleteDocument(this.state.document._id);
						}}
					>
						<img src='img/erase.png' alt='eliminar' border='0' width='15' />
					</a>
				</div>
			</div>
		);
	}
}

export default DocumentItem;
