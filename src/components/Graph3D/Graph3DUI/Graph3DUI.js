import React from "react";

import MyCheckbox from "../../components/MyCheckbox/MyCheckbox";

//export default class Graph3DUI extends React.Component {
//    constructor(props) {
//        super(props);
//        this.showHidePoints = props.showHidePoints;
//        this.showHideEdges = props.showHideEdges;
//        this.showHidePolygons = props.showHidePolygons;
//        this.state = { showPanel: false };
//    }
//
//    showHidePanel() {
//        this.setState({ showPanel: !this.state.showPanel });
//    }
//
//    render() {
//        return (
//            <div>
//                <button onClick={() => this.showHidePanel()}>{this.state.showPanel ? '<-' : '->'}</button>
//                {this.state.showPanel && (
//                    <>
//                        <MyCheckbox
//                            text={'Точки'}
//                            checked={false}
//                            onClick={(checked) => this.showHidePoints(checked)}
//                        />
//                        <MyCheckbox
//                            text={'Грани'}
//                            checked={false}
//                            onClick={(checked) => this.showHideEdges(checked)}
//                        />
//                        <MyCheckbox
//                            text={'Полигоны'}
//                            checked={true}
//                            onClick={(checked) => this.showHidePolygons(checked)}
//                        />
//                        
//                    </>
//                )}
//            </div>
//        );
//    }
//}
const Graph3DUI=({show,showHidePoints,showHideEdges,showHidePolygon})=>{
    const [showPanel,setShowPanel]=useState(false);
}