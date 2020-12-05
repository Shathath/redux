import * as actionTypes from './actionTypes'
export const addUser = (username)=>{
	
	return {
		 type : actionTypes.ADD_USER,
		 payload : {
			   username
		 }
	}
}