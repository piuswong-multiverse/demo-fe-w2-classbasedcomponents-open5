import React from 'react';
import { Photo } from './components/Photo';

class App extends React.Component {
    constructor() {
        super();
        this.state = { quote: "" }; // initialize state
    }

    componentDidMount() {
        fetch("https://api.kanye.rest").then((res) => res.json())
            .then((data) => {
                console.log(data); // debugging
                this.setState({ quote: data.quote })
            });
    }

    render() {
        return(
            <div>
                <h1>Hello! I'm in a class-based component now.</h1>
                <p>{ this.state.quote }</p>
                <Photo imgUrl={"https://picsum.photos/300"} />
            </div>
        )
    }
}

export { App };
