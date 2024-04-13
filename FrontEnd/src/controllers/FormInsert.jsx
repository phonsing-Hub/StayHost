import React, { useState } from "react";
import axios from "axios";
import "../../public/css/Formuser.css";

function FormInsert({ closehandleToggleForminsert }) {
  const [formData, setFormData] = useState({
    IDCard: "",
    Firstname: "",
    Lastname: "",
    Birthdate: "",
    Gender: "",
    Address: "",
    PhoneNumber: "",
    ProfilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { IDCard, Firstname, Lastname, Birthdate, Gender, Address, PhoneNumber } = formData;
      if (!IDCard || !Firstname || !Lastname || !Birthdate || !Gender || !Address || !PhoneNumber) {
        console.error("Please fill in all fields");
        return;
      }
      await axios.post("http://localhost:3000/api/register", formData);
      closehandleToggleForminsert();
    } catch (error) {
      console.log("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="FormExample">
        <i
          className="bi bi-x-octagon"
          onClick={closehandleToggleForminsert}></i>
        <form onSubmit={handleSubmit}>
          <div className="insert-img mb-3">
            <img src="img/user-images.png" alt="insert-img" />
          </div>
          <div className="mb-3 select-img">
            <input className="form-control" type="file" id="formFile" />
          </div>

          <div className="row g-3 needs-validation">
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                name="Firstname"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                name="Lastname"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                Birthdate
              </label>
              <input
                type="date"
                className="form-control"
                name="Birthdate"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="validationCustom01" className="form-label">
                IDcard 13
              </label>
              <input
                type="text"
                className="form-control"
                name="IDCard"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="validationCustom01" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="Address"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="validationCustom04" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                name="Gender"
                onChange={handleChange}
                required>
                <option value="">Choose...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>

            <div className="col-md-5">
              <label htmlFor="validationCustom01" className="form-label">
                PhoneNumber
              </label>
              <input
                type="text"
                className="form-control"
                name="PhoneNumber"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="submituser">
            <button className="btn btn-success" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormInsert;
