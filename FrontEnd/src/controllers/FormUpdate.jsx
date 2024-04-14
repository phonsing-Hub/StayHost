import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../public/css/FormUpdate.css";

const MySwal = withReactContent(Swal);

function FormUpdate({ closehandleToggleFormupdate, data }) {
  const [formData, setFormData] = React.useState(data);

  const showSwal = () => {
    MySwal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบรายการนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/user/${data.UserID}`)
          .then(() => {
            closehandleToggleFormupdate();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            Swal.fire("Error!", "Failed to delete your file.", "error");
          });
      }
    });
  };

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
      const {
        IDCard,
        Firstname,
        Lastname,
        Birthdate,
        Gender,
        Address,
        PhoneNumber,
      } = formData;
      if (
        !IDCard ||
        !Firstname ||
        !Lastname ||
        !Birthdate ||
        !Gender ||
        !Address ||
        !PhoneNumber
      ) {
        console.error("Please fill in all fields");
        return;
      }
      await axios.put(
        `http://localhost:3000/api/user/${data.UserID}`,
        formData
      );
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
              Save
            </button>
          </div>
        </form>
        <button type="button" class="btn btn-danger" onClick={showSwal}>
          Delete
        </button>
      </div>
    </>
  );
}

export default FormUpdate;
