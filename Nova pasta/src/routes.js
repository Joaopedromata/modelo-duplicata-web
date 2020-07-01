import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CadCliente from './pages/CadCliente'
import CadMultiplicador from './pages/CadMultiplicador'
import Gerador from './pages/Gerador'
import Navbar from './components/Navbar'
import Cliente from './pages/Cliente'
import Multiplicador from './pages/Multiplicador'


const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadcliente" component={CadCliente} />
                <Route path="/cadmultiplicador" component={CadMultiplicador} />
                <Route path="/gerador" component={Gerador} />
                <Route path="/cliente" component={Cliente} />
                <Route path="/multiplicador" component={Multiplicador} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router