import React from "react";
import "../Styles/contact.css";
import axios from "axios";


class Report extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phNumber: '',
      message: '',
      feedres: [],

    };
  }
  componentDidMount() {
    axios({
      url: 'http://localhost:2023/feedres',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(respone => {
        this.setState({ feedres: respone.data.Feeds })
      })
      .catch()

  }
  handlereport = () => {
    const { name, message, } = this.state;
    const repObj = {
      name: name,
      message: message,
    };
    axios({
      url: 'http://localhost:2023/feeds',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: repObj

    })
      .then(response => {
        if (response) {
          this.setState({
            name: '',
            message: '',
          });
          alert(response.data.message)

        }

      })
      .catch(err => console.log(err))
  }


  handleInputChange = (event, state) => {
    this.setState({ [state]: event.target.value });
  }

  render() {
    const { feedres } = this.state;
    return (
      <div className="container-fluid ">

        <div className="container-fluid form-div">
          <h3 className="Acc-name">FeedBack</h3>
          <span> <label className="NameH">name</label>
            <input type="text" placeholder="enter your name" className="form-control" onChange={(event) => this.handleInputChange(event, 'name')} /></span>
          <label className="NameH">Message</label>
          <textarea type="text" placeholder="enter your valuable response " className="form-control text-areaH" onChange={(event) => this.handleInputChange(event, 'message')} />
          <button className="btn btn-danger mt-3 mb-5 button" onClick={this.handlereport}>Submit</button>

        </div>
        <div className="row mt-5">
        {feedres.map((item) => {
                        return <div className="col-3 transf text-light">
                         <div className="card trans text-light">
                           <div className="card-title trans text-light">{item.name}</div>
                           <div className="message trans text-light">{item.message}</div>
                        </div>

                        </div>

                    })}
        
        
        
        </div>

      </div>
    );
  }
}
export default Report;
