import {React, useEffect, useState} from 'react';
import '../../public/css/FormRoom.css';

function FormRoomInsert({closehandleToggleForminsert}) {
  return (
    <>
    <div className="fromRoom">
    <i className="bi bi-x-octagon" onClick={closehandleToggleForminsert}></i>
    <form className="row g-3 needs-validation" noValidate>
    <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" required/>
  </div>
    </form>
    </div>
    </>
  )
}

export default FormRoomInsert
