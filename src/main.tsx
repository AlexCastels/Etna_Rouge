import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './redux/store.tsx'
import { Provider } from 'react-redux'
import { Profiler } from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
       <Provider store={store}>
        <App />
       </Provider>
    </>
)
