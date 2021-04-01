import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            spacePeople: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(({people}) => this.setState({ spacePeople: people }))
    }

    render() {
        return (
            <div>
                {this.state.spacePeople.map((person, id) => <h3 key={id}>{person.name}</h3>)}
            </div>
        )
    }
}

export default App;