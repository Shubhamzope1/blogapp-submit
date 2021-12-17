import React from 'react';
import axios from 'axios';
import '../Styles/home.css';
class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            Quotes: [],
            day:[]
        }
    }
    componentDidMount() {
        axios({
            url: 'http://localhost:2023/Quotes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ Quotes: response.data.Quotes })
                console.log(response.data.Quotes)
            })
            .catch()
            axios({
                url: 'http://localhost:2023/qofday',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(respone => {
                    this.setState({ day: respone.data.day })
                })
                .catch()
    }
    render() {
        const { Quotes } = this.state;
        return (
            <div>
                <div id="heading"className="container justify-content-center text-light">
                    <h1 id="h1"className="h1">Quote Of The Day</h1>
                    <h3 id="h3"className="h3 justify-content-center">Keep Yourself Motivated to learn new things</h3>
                </div>
                <div>
                    <section className="container">
                        <div id="daily"className="container text-light" >
                            <h1 className="h1 text-light">Quote</h1>
                            <br />
                            <div>
                                <div>
                                    {Quotes.length > 0 ? Quotes.map((item, index) => {
                                        return <div key={index}>
                                            <div>
                                                <h1 className="TheBig">{item.name}</h1>
                                                
                                            </div>
                                            <div>
                                            <div className="row">
                                            {Quotes && item.thumb && item.thumb.map((image) => {
                                                     
                                                        return <div className="col-lg-4 col-md-6 col-sm-12 g-0 box">
                                                            <img src={image} className="l_img" alt="Sorry for the Inconvinience" />
                                                        </div>
                                                    
                                            
                                                    })}
                                                        </div>
                                            </div>
                                           
                                        </div>
                                    }) : null}


                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>
        )
    }

}
export default Quotes;