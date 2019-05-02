import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import '../css/companyInfo.css';
import { simpleAction } from '../actions/simpleAction';

class FirstPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      company_name: '',
      alias:'',
      checked:false,
      industry_type:'',
      Account_manager:'',
      country:'',
      startDate: new Date(),
      Address_line1:'',
      Address_line2:'',
      zip:'',
      city:'',
      phone:'',
      states:'',
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
          });
    }
    handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked })

    handledropChange1=(event)=>{
        this.setState({industry_type:event.target.value});
      }
    
     
      handledropChange2=(event)=>{
        this.setState({Account_manager:event.target.value});
      }

      handledropChange3 =(event)=>
      {
        this.setState({country:event.target.value});
      }
      
      handledropChange4=(event)=>{
        this.setState({states:event.target.value});
      }
      

      handledateChange=(date)=> {
        this.setState({
          startDate: date
        });
      }

    handleSubmit(event) {
      const { simpleAction } = this.props;
      event.preventDefault();
      console.log(this.state);
      simpleAction({...this.state});
    }
  
    render() {
      console.log('render state', this.state)
      return (
  <div  className="form">
    <form onSubmit={this.handleSubmit}>
         <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            className="checkbox"
          /><span>This is a demo company</span>
        <p>Company Name:</p>
        <input type="text" name="company_name" onChange={this.handleChange} />
        <p>Company Alias:</p>
        <input type="text" name="alias" onChange={this.handleChange} />
    
        <h2>Account-Information</h2>
      
        <p>Industry Type</p>
        <select 
        value={this.state.industry_type} 
        onChange={this.handledropChange1} 
        className="select-menu"
      >
        <option value="sample1">sample1</option>
        <option value="sample2">sample2</option>
        <option value="sample3">sample3</option>
      </select>


       <p>Account manager</p>
      <select 
        value={this.state.Account_manager} 
        onChange={this.handledropChange2} 
        className="select-menu"
      >
       <option value="sample1">sample1</option>
        <option value="sample2">sample2</option>
        <option value="sample3">sample3</option>
      </select><br></br>

      <p>Start Date:</p>

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handledateChange}
        className="date-picker"
      />

      <h2>Contact-Information</h2>

      <p>Country</p>
      <select 
        value={this.state.country} 
        onChange={this.handledropChange3} 
        className="select-menu"
      >
       <option value="sample1">sample1</option>
        <option value="sample2">sample2</option>
        <option value="sample3">sample3</option>
      </select>
         
      <p>Billing Address Line1:</p>
        <input type="text" name="Address_line1" onChange={this.handleChange}/>

      <p>Billing Address Line2:</p>
        <input type="text" name="Address_line2" onChange={this.handleChange}/>
      
      <p>City:</p>
        <input type="text" name="city" onChange={this.handleChange}/>
        
      <p>Zip code:</p>
      <select 
        value={this.state.states} 
        onChange={this.handledropChange4} 
        className="select-menu-small"
      >
       <option value="sample1">sample1</option>
        <option value="sample2">sample2</option>
        <option value="sample3">sample3</option>
      </select>
        <input type="number" name="zip" onChange={this.handleChange} className="zip-input"/>
    
      <p>Phone Number:</p>
        <input type="number" name="Phone" onChange={this.handleChange}/>
       <br></br>
        <input type="submit" value="Submit" />

    </form>
  </div>
  
      );
    }
  }
  const mapStateToProps = state => ({
    ...state
   })
  
  const mapDispatchToProps = dispatch => ({
    simpleAction: (data) => dispatch(simpleAction(data))
   })
  export default connect(mapStateToProps,mapDispatchToProps)(FirstPage);