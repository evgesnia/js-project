import { useState } from 'react';

import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Graph2D from './components/Graph2D/Graph2D';
import Graph3D from './components/Graph3D/Graph3D';

import './App.css';

const App=()=>{
    const [showComponent,setShowComponent]=useState('Graph3D');
    return (
                <>
                    <Header showComponent={setshowComponent} />
                    {showComponent === 'Calculator' ?
                        <Calculator /> :
                        showComponent === 'Graph2D' ?
                            <Graph2D /> :
                            showComponent === 'Graph3D' ?
                                <Graph3D /> : <></>
                    }
                </>
            );
}
export default App;