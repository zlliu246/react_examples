import React from "react"
import axios from "axios"

class HomePage extends React.Component {
    
    state = {
        message: "default message"
    }

    componentDidMount() {
        axios.get("https://api.npoint.io/df2c42f9149aa832ea14")
        .then((response) => {
            this.setState({
                message: response.data.message
            })
        })
    }

    render () {
        return <div>
            {this.state.message}
        </div>
    }
}

export default HomePage