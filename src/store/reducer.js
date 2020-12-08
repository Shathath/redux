
const initialState = {
	 users : [],
	 usercount : 0,
	 success : false,
	 isAuthenticated: false
}
export default function reducer(state = initialState , action){
	switch(action.type){
		case 'adduser':
			return { ...state, 
				users: [...state.users,action.payload.username],
				success: true,
				isAuthenticated: true
				}
		default: 
		   return state
	}
}