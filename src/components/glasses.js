import React, {Component} from 'react';
import './glasses.css'

class Glasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glasses: this.props.product
        }
    }
    render() {
        return (
            <div className="col" onClick={() => {this.props.onChangeGlasses(this.state.glasses)}}>
                <img  width={"100%"} src={this.state.glasses.url} alt=""/>
            </div>
        );
    }
}

export default Glasses;