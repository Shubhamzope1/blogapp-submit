import React from 'react';
import '../Styles/home.css';
import axios from 'axios';


class Digital extends React.Component {
    constructor() {
        super();
        this.state = {
            Digital: []
        }
    }
    componentDidMount() {
        sessionStorage.clear();
        axios({
            url: 'http://localhost:2023/Digital',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ Digital: respone.data.Digital })
            })
            .catch()

    }

    render() {
        const { Digital } = this.state;
        return (
            <div>
                <div id="digco" className="container text-light">
                    <h1 id="digital" className="h1 text-light">Digital</h1>
                    <br />
                    {/*{ Data in content should be stored with \n where you want to show data in new line } */}
                    {Digital.map((item) => {
                        return <div  className="whitespace">
                            <h4 id="h4" className="container text-light">Topic-{item.name} </h4>
                            <p id="P" className="container text-light">{item.content}
                            </p>
                        </div>


                    })}




                </div>
            </div>
        )
    }
}
export default Digital;