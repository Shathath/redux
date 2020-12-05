
import configureStore from '././store/configureStore'
import {addUser} from './store/actions';
const store = configureStore()

store.subscribe(()=>{
	console.log("Store Changed",store.getState())
})
store.dispatch(addUser('shathath'))

function App() {
 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
