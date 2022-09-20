
import './App.css'
import { QueryClientProvider, QueryClient} from 'react-query'
import { Movies } from './components/Movies/Movies'

import { Navbar } from './components/Navbar/Navbar'
import { useContext } from 'react'
import { cardContext } from './components/Context'
import SearchResult from './components/SearchResult'

const queryClient = new QueryClient()

function App() {

  const {input} = useContext(cardContext);
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Navbar/>
      {input ? <SearchResult/> : <Movies/>}
    </div>
    </QueryClientProvider>
  )
}

export default App
