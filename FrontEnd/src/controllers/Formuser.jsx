import React, { useState } from 'react';
import axios from 'axios';
import '../../public/css/Formuser.css'

function Formuserinsert({closehandleToggleForminsert}) {
  const [formData, setFormData] = useState({
    RIDCard: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', formData);
      closehandleToggleForminsert();
    } catch (error) {
      console.log('Error submitting form data:', error);
    }
  };

  return (
    <>
      <div className='FormExample'>
        <i className="bi bi-x-octagon" onClick={closehandleToggleForminsert}></i>
        <form onSubmit={handleSubmit} class="row g-3">
          <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">RIDCard</label>
            <div class="input-group">
              <input type="text" class="form-control" name="RIDCard" value={formData.RIDCard} onChange={handleChange} required />
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationDefault01" class="form-label">First name</label>
            <input type="text" class="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div class="col-md-4">
            <label for="validationDefault02" class="form-label">Last name</label>
            <input type="text" class="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Birthdate</label>
            <input type="date" class="form-control" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
          </div>
          <div class="col-md-3">
            <label for="validationDefault04" class="form-label">Gender</label>
            <select class="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
              <option selected disabled value="">Choose...</option>
              <option value={'M'}>Male</option>
              <option value={'F'}>Female</option>
              <option value={'O'}>Orther</option>
            </select>
          </div>
          <div class="col-md-5">
            <label for="validationDefault05" class="form-label">Address</label>
            <input type="text" class="form-control" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div class="col-md-5">
            <label for="validationDefault05" class="form-label">PhoneNumber</label>
            <input type="text" class="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div class="col-12">
            <button class="btn btn-success" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </>
  )
};

function Formuserupdate({closehandleToggleFormupdate}){

  return(
    <>
     <div className='FormExample'>
     <i className="bi bi-x-octagon" onClick={closehandleToggleFormupdate}></i>
     </div>
    </>
  )
};

function Formuserdelete({closehandleToggleFormdelete}){
  return(
    <>
     <div className='FormExample'>
     <i className="bi bi-x-octagon" onClick={closehandleToggleFormdelete}></i>
     </div>
    </>
  )
};

export { Formuserinsert, Formuserupdate, Formuserdelete };
