import React, {Component} from 'react';
// import { library } from '@fortawesome/fontawesome-free';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
 //import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
 import { Col, Grid, Row } from 'react-bootstrap';


 //library.add(faCheckCircle);
// library.add(faStar);
// library.add(faSearch);
// library.add(faCoffee);
// library.add(faTimes);


class BaseballScoreBoardHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  returnDays(){


    //
    return(        
        <select>        
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>      
    </select>   
    )
  }


  render(){



    return (

        <div>
            <h1>Baseball Scoreboard</h1>
            <br></br>
            <br></br>

            <div>
    <Grid>
    <Row>
    <Col sm={1}>
      Year&nbsp;&nbsp;
      <select>
        <option value="2019">April</option>
        <option value="2018">May</option>
        <option value="2017">June</option>
        <option value="2016">July</option>                
    </select>     
      </Col>
      <Col sm={2}>
      Month&nbsp;&nbsp;
      <select>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
            </select>     
      </Col>
      <Col sm={1}>
      Day&nbsp;{this.returnDays()}   
      </Col>
    </Row>
    </Grid>
  
  <br></br>
  </div>
  <hr></hr>
  <br></br>



  </div>
    )
  }
}

export default BaseballScoreBoardHeader;