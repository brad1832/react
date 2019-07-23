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
        ? 'Id must be in numbers only!'
        : '';
    break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
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
          <h2>Add new employee</h2>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className='empId'>
              <label htmlFor="empId">Employee Id</label>
              <br></br>
              <input input type='text' name='empId' onChange={this.handleChange} noValidate />
              {errors.empId.length > 0 && 
                <span className='error'>{errors.empId}</span>}
            </div>
            <div className='fullName'>
              <label htmlFor="fullName">Employee Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='empQual'>
              <label htmlFor="empQual">Qualification</label>
              <br></br>
              <input input type='text' name='empQual' onChange={this.handleChange} noValidate />
              {errors.empQual.length > 0 && 
                <span className='error'>{errors.empQual}</span>}
            </div>
            <div className='empSal'>
              <label htmlFor="empSal">Employee Salary</label>
              <br></br>
              <input input type='text' name='empSal' onChange={this.handleChange} noValidate />
              {errors.empSal.length > 0 && 
                <span className='error'>{errors.empSal}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <select className='password'>
              <option value="General">Sales Boy</option>
              <option value="OBC">Sales Manager</option>
              <option value="BC">HR</option>
          </select>
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
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