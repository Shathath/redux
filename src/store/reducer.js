
const initialState = {
	 users : [],
	 usercount : 0
}
export default function reducer(state = initialState , action){
	switch(action.type){
		case 'adduser':
			console.log("InitialState",initialState)
			var x = { ...state, users: [...state.users,action.payload.username]}
			console.log("Updated",x)
			return { ...state, users: [...state.users,action.payload.username]}
		default: 
		   return state
	}
}