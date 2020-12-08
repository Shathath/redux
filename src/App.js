
import configureStore from '././store/configureStore'
import InputForm from './InputForm';
import {addUser} from './store/actions';
import {Provider} from 'react-redux'
const store = configureStore()

store.subscribe(()=>{
	console.log("Store Changed",store.getState())
})
store.dispatch(addUser('shathath'))

function App() {
 
  return (
	<Provider store={store}>
    <div className="App">
       <InputForm />
    </div>
	</Provider>
  );
}

export default App;
