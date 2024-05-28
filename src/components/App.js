import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tokens from './Tokens';
import Footer from './Footer';
import Loteria from './Loteria.js';
import Ganador from './Ganador.js';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App" style={{ backgroundColor: '#222', color: '#fff' , minHeight: '100vh' }}>
                    <div>
                        <Routes>
                            <Route path="/" element={<Tokens />} />
                            <Route path="/loteria" element={<Loteria />} />
                            <Route path="/ganador" element={<Ganador />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
