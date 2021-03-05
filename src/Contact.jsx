import React from 'react';
import { useState } from 'react';

const Contact =() => {

  const [data, setData] = useState({
    name:'',
    email:'',
    number:'',
    message:'',
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
      `My name is ${data.name}. My Email ID is ${data.email}. My Mobile no is ${data.number}. Here is what I say ${data.message}`
    );
  };
  return (
  <>
    <div className="my-5">
      <h1 className="text-center"> Contact Us </h1>
    </div>
    <div className="container contact_div">
      <div className='row'>
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="name" class="form-control" id="exampleFormControlInput1"  name="name" value={data.name} onChange={InputEvent} placeholder="Enter your Name" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="mail@ex.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-lebel">Phone</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" name="number" value={data.number} onChange={InputEvent} placeholder="Enter your Mobile Number" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onchange={InputEvent}></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-outline-primary" type="submit">Send</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Contact;