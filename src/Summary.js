import React from 'react';
import Pokemon from "./Pokemon";

class Summary extends React.Component {
    render(){
        return <Pokemon {...this.props} isSummary={true}></Pokemon>
    }
}
export default Summary;
