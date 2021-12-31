import React from "react"
import axios from "axios"

class Parent extends React.Component {
    
    state = {message: "default message"}

    componentDidMount() {

        const url = "https://api.npoint.io/df2c42f9149aa832ea14"

        axios.get(url)
        .then((response) => {
            this.setState({
                message: response.data.message
            })
        })
    }

    render () {
        return <div>
            <h1>From Parent Component: {this.state.message} </h1> <br/>
            <ChildComponent message={this.state.message} />
        </div>
    }
}

class ChildComponent extends React.Component {

    render() {
        return <h1>
            From Child Component: {this.props.message}
        </h1>
    }

}

export default Parent