import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DocumentUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			subject: "",
			description: "",
			identifier: "",
			type: "",
			coverage: "",
			date: new Date(),
			documentTypes: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/documents/" + this.props.match.params.id)
			.then(response => {
				this.setState({
					title: response.data.title,
					subject: response.data.subject,
					description: response.data.description,
					identifier: response.data.identifier,
					type: response.data.type,
					coverage: response.data.coverage,
					date: new Date(response.data.date)
				});
			})
			.catch(function(error) {
				console.log(error);
			});

		axios
			.get("http://localhost:5000/documentTypes/")
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						documentTypes: response.data.map(documentType => documentType.title)
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	onChangeType = e => {
		this.setState({
			type: e.target.value
		});
	};

	onChangeTitle = e => {
		this.setState({
			title: e.target.value
		});
	};

	onChangeSubject = e => {
		this.setState({
			subject: e.target.value
		});
	};

	onChangeDescription = e => {
		this.setState({
			description: e.target.value
		});
	};

	onChangeIdentifier = e => {
		this.setState({
			identifier: e.target.value
		});
	};

	onChangeCoverage = e => {
		this.setState({
			coverage: e.target.value
		});
	};

	onChangeDate = date => {
		this.setState({
			date
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const document = {
			title: this.state.title,
			subject: this.state.subject,
			description: this.state.description,
			identifier: this.state.identifier,
			type: this.state.type,
			coverage: this.state.coverage,
			date: this.state.date
		};

		axios
			.post(
				"http://localhost:5000/documents/update/" + this.props.match.params.id,
				document
			)
			.then(res => console.log(res.data));

		window.location = "/list";
	};

	onCancel() {
		window.location = "/list";
	}

	render() {
		return (
			<div>
				<h3>Editar documento</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>T&iacute;tulo: </label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.title}
							onChange={this.onChangeTitle}
						/>
					</div>
					<div className='form-group'>
						<label>Claves: </label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.subject}
							onChange={this.onChangeSubject}
						/>
					</div>
					<div className='form-group'>
						<label>Descripci&oacute;n: </label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className='form-group'>
						<label>Fuente: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.identifier}
							onChange={this.onChangeIdentifier}
						/>
					</div>
					<div className='form-group'>
						<label>Tipo de recurso: </label>
						<select
							required
							className='form-control'
							value={this.state.type}
							onChange={this.onChangeType}
						>
							{this.state.documentTypes.map(function(documentType) {
								return (
									<option key={documentType} value={documentType}>
										{documentType}
									</option>
								);
							})}
						</select>
					</div>
					<div className='form-group'>
						<label>Cobertura: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.coverage}
							onChange={this.onChangeCoverage}
						/>
					</div>
					<div className='form-group'>
						<label>Date: </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>

					<div className='form-group'>
						<Button color='primary' onClick={this.onSubmit}>
							Editar documento
						</Button>
						<Button color='secondary' className='m-2' onClick={this.onCancel}>
							Volver
						</Button>
					</div>
				</form>
			</div>
		);
	}
}
export default DocumentUpdate;
