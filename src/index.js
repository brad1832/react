import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
 
class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}
 
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
 
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      empId:null,
      email: null,
      password: null,
      empQual:null,
      empSal:null,
      errors: {
        fullName: '',
        email: '',
        empQual: '',
        empId: '',
        password: '',
        empSal: '',
        
      }
    };
  }
 
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
 
    switch (name) {
      case 'fullName': 
        errors.fullName = 
          !(value.match(/^[a-zA-Z]+$/))
            ? 'Name must contain only characters!'
            : '';
        break;
      case 'empId':
        errors.empId =
        value.match(/^[a-zA-Z]+$/)
        ? ' must be in numbers only!'
        : '';
    break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      
    }
 
    this.setState({errors, [name]: value});
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
  
 
  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Proposal Submission Form</h2>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className='fullName'>
              <label htmlFor="fullName">Name of the PI in Amrita</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email Address of PI</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Title of the proposal</label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Funding Agency</label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">URl of the call for proposal </label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Type of Call </label>
              <br></br>
              <small>International/Travel grant etc</small>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Co pis </label>
              <br></br>
              <small>For Copis not in cse</small>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
         
           
            <div className='empSal'>
              <label htmlFor="empSal">Amount requested from India side</label>
              <br></br>
              <input input type='text' name='empSal' onChange={this.handleChange} noValidate />
              {errors.empSal.length > 0 && 
                <span className='error'>{errors.empSal}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Submission date </label>
              <br></br>
              
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            
 
            <div className='submit'>
              <button>Create</button>
            </div>
</form>
        </div>
      </div>
    );
  }
}
 
render(<App />, document.getElementById('root'));