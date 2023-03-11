import './mainApp.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = (props) => {
  return (
    <div className='main-app-wrapper'>
      <Header />
      <div className='content-wrapper'>
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp
