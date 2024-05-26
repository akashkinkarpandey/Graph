import { Provider } from 'react-redux'
import store from './redux/store'

import './App.css'
import BFS from './components/BFS'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BFS />
      </Provider>
    </div>
  )
}

export default App
