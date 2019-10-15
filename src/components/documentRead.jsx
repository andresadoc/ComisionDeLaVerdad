import React, { Component } from "react";
import DocumentItem from "./documentItem";
import axios from "axios";

class DocumentRead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			documents: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/documents/")
			.then(response => {
				this.setState({ documents: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	}

	deleteDocument = id => {
		axios.delete("http://localhost:5000/documents/" + id).then(response => {
			console.log(response.data);
		});

		this.setState({
			documents: this.state.documents.filter(el => el._id !== id)
		});
	};

	render() {
		return (
			<div className='container'>
				<h3>Recursos documentales</h3>
				<div className='m-3'>
					A continuaci&oacute;n se listan los recursos documentales que se
					encuentran registrados en el sistema de informaci&oacute;n.
					<br />
				</div>
				<div className='row'>
					<div className='col-sm'>
						<h5>T&iacute;tulo</h5>
					</div>
					<div className='col-sm'>
						<h5>Claves</h5>
					</div>
					<div className='col-sm'>
						<h5>Descripci&oacute;n</h5>
					</div>
					<div className='col-sm'>
						<h5>Fuente</h5>
					</div>
					<div className='col-sm'>
						<h5>Tipo de recurso</h5>
					</div>
					<div className='col-sm'>
						<h5>Cobertura</h5>
					</div>
					<div className='col-sm'>
						<h5>Fecha</h5>
					</div>
					<div className='col-sm'>
						<h5>Acciones</h5>
					</div>
				</div>
				{this.state.documents.map(documentItem => {
					return (
						<DocumentItem
							item={documentItem}
							deleteDocument={this.deleteDocument}
							key={documentItem._id}
						/>
					);
				})}
			</div>
		);
	}
}

export default DocumentRead;
