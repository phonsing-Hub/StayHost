import React from 'react'
import '../assets/css/Formuser.css'
function Formuser({showForm,  closehandleToggleForm}) {

  return (
    <>
    <div className={`FormExample ${showForm ? 'active' : ''}`}>
        <i className="bi bi-x-octagon" onClick={closehandleToggleForm}></i>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">username</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Fullname</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-6">
            <label for="inputAddress2" class="form-label">PhoneNumber</label>
            <input type="text" class="form-control" id="PhoneNumber" placeholder="000 000 0000" />
          </div>
          <div class="col-md-6">
            <label class="form-label">เลขบัตรประจำตัวประชาชน</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">เพศ</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">ID User</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-3">
          <label for="inputState" class="form-label">Roomnumber</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-3">
          <label for="inputState" class="form-label">RoomType</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-3">
          <label for="inputState" class="form-label">RoomID</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-3">
          <label for="inputState" class="form-label">Price</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formuser
