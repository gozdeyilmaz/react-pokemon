import React from 'react';

class RandomNumeGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 5
        };
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber(){
        this.setState({
            number: Math.floor(Math.random() * 100)
        })
    }

    render(){
        return <div>
            <button onClick={this.changeNumber}>Generate Number</button>
            <div>
                Sayi {this.state.number}
            </div>
        </div>
    }
}
export default RandomNumeGenerator;
