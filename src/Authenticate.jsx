import React from 'react';
import { useState } from 'react';

const Authenticate =() => {

  const [data, setData] = useState({
    email:'',
    password:'',
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });
  };
  
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `You are Successfully enter`
    );
  };
  return (
  <>
    <div className="my-5">
      <h1 className="text-center"> Log-In </h1>
    </div>
    <div className="container contact_div">
      <div className='row'>
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email ID</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="mail@ex.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-lebel">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={InputEvent} placeholder="Enter Password" />
          </div>
          
          <div class="col-12">
            <button class="btn btn-outline-primary" type="submit">Login</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Authenticate;