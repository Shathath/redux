import React from 'react';
import { connect } from 'react-redux'
import {addUser} from './store/actions';
const Users = ({name})=>{
	console.log(name)
	 return <p>{name}</p>
}
class InputForm extends React.Component{
	constructor(props){
		super(props)
		this.handleSubmit  = this.handleSubmit.bind(this)
		this.state = {
			name: ''
	   }
	}
	
	handleSubmit = ()=>{
		this.props.onSubmit(this.state.name)
	}
	render(){
		
		return(
			<div>
				<input type='text' onChange={(e)=>this.setState({
					 name : e.target.value
				})}></input>
				<button type='submit' onClick={this.handleSubmit}>Add User</button>
				{this.props.success  ? this.props.users.map((val)=>{
					return <Users name={val} />
				}) : null}
			</div>
			
		)
	}
}
const mapStateToProps = state => {
	return {
		success : state.success,
		users : state.users
	}
}
const mapDispatchToProps = dispatch => {
	 return {
		 onSubmit : (name)=> dispatch(addUser(name))
	 }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputForm)