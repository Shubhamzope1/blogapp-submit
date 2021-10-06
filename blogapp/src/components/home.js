import React from 'react';
import axios from 'axios';


class Quotes extends React.Component{
    constructor() {
        super();
        this.state = {
            Quotes:[],
            day:{}
        }
    }
    componentDidMount() {
        
        axios({
            url: 'http://localhost:2023/Quotes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ Quotes: respone.data.Quotes })
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
    render(){
        const{Quotes}= this.state;
        return(
            <div>
              <div id="heading" className="container justify-content-center text-light">
            <h1 id="h1" className="h1">Quote Of The Day</h1>
            <h3 id="h3" className="h3 justify-content-center">{day.name}</h3>
          </div>
          <div>
                <section className="container">
                        <div id="daily" className="container text-light" >
                        <h1 className="h1 text-light">Quote</h1>
                        <br />
                            <div>
                           <h2 id="moto" className="h2 text-light"> {Quotes.name} </h2>
                      
                       
                            </div>
                    </div>
                </section>
               

            </div>

            </div>
        )
    }
}
export default Quotes;