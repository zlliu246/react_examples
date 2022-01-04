import React from "react"

class HomePage extends React.Component {

    state = {
        innerWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        this.setState({innerWidth: window.innerWidth})
    }

    getColor(innerWidth) {
        if (innerWidth <= 500) return "red"
        if (innerWidth <= 600) return "blue"
        if (innerWidth <= 700) return "green"
        if (innerWidth <= 800) return "yellow"
        if (innerWidth <= 900) return "pink"
        if (innerWidth <= 1000) return "beige"
        if (innerWidth <= 1100) return "lightblue"
        return "violet"
    }

    render() {

        const style = {
            "background-color": this.getColor(this.state.innerWidth)
        }

        return <div>

            <h1>
                this.state.innerWidth: {this.state.innerWidth}
            </h1>

            <br />

            <h1 style={style}>
                The background color of this div changes as you resize your screen
            </h1>

        </div>
    }

}

export default HomePage