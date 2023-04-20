import React from "react";

import MyCheckbox from "../../components/MyCheckbox/MyCheckbox";

const Graph3DUI=({show,showHidePoints,showHideEdges,showHidePolygon})=>{
    const [showPanel,setShowPanel]=useState(false);
    const showHidePanel=()=>setShowPanel(!showPanel);
    return (
                <div>
                    <button onClick={showHidePanel}>{showPanel ? '<-' : '->'}</button>
                    {showPanel && (
                        <>
                            <MyCheckbox
                                text={'Точки'}
                                checked={show.showPoints}
                                onClick={showHidePoints}
                            />
                            <MyCheckbox
                                text={'Грани'}
                                checked={show.showEdges}
                                onClick={showHideEdges}
                            />
                            <MyCheckbox
                                text={'Полигоны'}
                                checked={show.showPolygons}
                                onClick={showHidePolygons}
                            />
                            
                        </>
                    )}
                </div>
            );
}