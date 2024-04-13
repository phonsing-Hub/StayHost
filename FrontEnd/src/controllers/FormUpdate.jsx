import React from "react";
import "../../public/css/FormUpdate.css";

function FormUpdate({ closehandleToggleFormupdate, data }) {
  const [formData, setFormData] = React.useState(data);

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
      console.log(formData);
      closehandleToggleFormupdate();
    } catch (error) {
      console.log("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="fromUpdate">
        <i
          className="bi bi-x-octagon"
          onClick={closehandleToggleFormupdate}></i>
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
                defaultValue={data.Firstname}
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
                defaultValue={data.Lastname}
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
                defaultValue={data.Birthdate}
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
                defaultValue={data.IDCard}
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
                defaultValue={data.Address}
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
                defaultValue={formData.gender}
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
                defaultValue={data.PhoneNumber}
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

export default FormUpdate;
