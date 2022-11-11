import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'

import {Container} from './components/index'
import {Header,Footer} from './sections/index'
import { Home,Profile } from './Pages/index'

const App = () => {
    return(
        <div>
            <Router>
                <Header />

                <Container>
                    <Routes>
                        <Route path='/Home' element={<Home/>}  />
                        <Route path='/Profile' element={<Profile/>}  />
                    </Routes>
                </Container>

                <Footer />
            </Router>
        </div>
    )
}


export default App