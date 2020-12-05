
import configureStore from '././store/configureStore'
import InputForm from './InputForm';
import {addUser} from './store/actions';
const store = configureStore()

store.subscribe(()=>{
	console.log("Store Changed",store.getState())
})
store.dispatch(addUser('shathath'))

function App() {
 
  return (
    <div className="App">
       <InputForm />
    </div>
  );
}

export default App;
