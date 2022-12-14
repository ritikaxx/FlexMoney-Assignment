import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Payment from './components/Payment'
import Join from './components/Join'
import EditBatch from './components/EditBatch'
import JoineesList from './components/JoineesList'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/join'} className="nav-link">
                  HYPE Yoga Classes
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/join'} className="nav-link">
                    Join Classes
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/joinees-list'} className="nav-link">
                    All Joinees
                  </Link>
                </Nav>

              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Join {...props} />}
                  />
                  <Route
                    exact
                    path="/join"
                    component={(props) => <Join {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditBatch {...props} />}
                  />
                  <Route
                    exact
                    path="/joinees-list"
                    component={(props) => <JoineesList {...props} />}
                  />
                  <Route
                    exact
                    path="/payment/:id"
                    component={(props) => <Payment {...props} />}
                  />
                  <Route
                    exact
                    path="/home"
                    component={(props) => <Home {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
