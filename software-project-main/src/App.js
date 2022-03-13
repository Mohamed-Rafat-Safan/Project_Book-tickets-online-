import { Component } from 'react';
import './index.css';
import Home from './components/Home'
import Login from './components/login'
import Update from './components/update'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Integrated from './components/inegrated';
import Cinema from './components/cinema';
import Stadium from './components/Stadium'
import About from './components/about'
import Contact from './components/contact'
import Register from './components/register'
import Register2 from './components/register2'
import Register3 from './components/register3'
import Register4 from './components/register4'
import Faq from './components/faq'
import Stor from './components/stor'
import Sport from './components/sport'


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/update" element={<Update />} />
                        <Route path="/integrated" element={<Integrated />} />
                        <Route path="/cinema" element={<Cinema />} />
                        <Route path="/stadium" element={<Stadium />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register2" element={<Register2 />} />
                        <Route path="/register3" element={<Register3 />} />
                        <Route path="/register4" element={<Register4 />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/stor" element={<Stor />} />
                        <Route path="/sport" element={<Sport />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

}



export default App;