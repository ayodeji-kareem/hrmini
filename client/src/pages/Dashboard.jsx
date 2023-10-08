import React from "react";
import "../styles/dashboard.css";
import illustration from "../images/nostaffsimg.png";
import addsign from "../images/addsign.svg";
import { motion } from "framer-motion";
import {
  FaPenSquare,
  FaHome,
  FaUserCircle,
  FaSchool,
  FaTimes,
  FaCamera,
} from "react-icons/fa";
import { mockuserdata } from "./data";
const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="display">
        {/* <div className="no_staffs">
          <h1>
            You currently have
            <span style={{ borderBottom: "3px solid #45BE93" }}>
              {" "}
              no staffs
            </span>
          </h1>
          <motion.button>
            <img src={addsign} alt="" />
          </motion.button>
          <span>
            Click to start your{" "}
            <span style={{ color: "#45BE93" }}>HRMini </span>Experience
          </span>
          <img src={illustration} alt="illustration" />*/}

        <div className="staffs-container">
          {mockuserdata.map((staff, i) => {
            const { name, img, position, status } = staff;
            return (
              <div className="single-staff">
                <img src={img} alt="" />
                <div className="bottom">
                  <span className="state"></span>
                  <span className="staff-name">{name}</span>
                  <div className="bottom-bar">
                    <div className={`status-pill ${status === "inactive" && "status-inactive"}`}>{status}</div> {position}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dynamic_panel">
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div className="top_bar">
            <div className="user_info">
              <div className="company_img">
                <img src="" alt="" />
              </div>
              <span className="user_name">VariationTech</span>
            </div>
            <span class="logo">
              HR
              <span>M</span>
              ini
            </span>
          </div>
          {/* <div className="side-menu">
            <button>
              <span>Dashboard</span>
              <FaHome />
            </button>
            <button>
              <span>Update Profile</span>
              <FaPenSquare />
            </button>
            <button>
              <span>Edit available Departments</span>
              <FaSchool />
            </button>
            <button>
              <span>Edit available Positions</span>
              <FaUserCircle size={24} />
            </button>
          </div> */}
          {/* add staff form */}
          {/* <form action="" className="add_staff_form">
            <div className="form_label">
              <span>New Staff Details</span>
              <button>
                <FaTimes />
              </button>
            </div>
            <label className="add_staff_img" htmlFor="add_staff_img">
              <FaCamera />
            </label>
            <input type="file" name="add_staff_img" id="add_staff_img" />
            <div className="add_staff_form_group">
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="First Name" />
            </div>
            <div className="add_staff_form_group">
              <input type="text" placeholder="Department" />
              <input type="text" placeholder="Job Title" />
            </div>
            <div className="add_staff_form_group">
              <input type="text" placeholder="Address" />
              <select name="" id="">
                <option disabled value="Gender">
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="add_staff_form_group">
              <select name="" id="">
                <option disabled value="Employment status">
                  Employment Status
                </option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
              <input type="text" placeholder="Age" />
            </div>
            <div className="add_staff_form_group">
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
            </div>
            <input type="submit" value={"Add new staff"} />
          </form> */}
          {/* update staff form */}
          <form action="" className="add_staff_form">
            <div className="form_label">
              <span>
                Update <b>{"Victor"}'s</b> Details
              </span>
              <button>
                <FaTimes />
              </button>
            </div>
            <label className="add_staff_img" htmlFor="add_staff_img">
              <FaCamera />
            </label>
            <input type="file" name="add_staff_img" id="add_staff_img" />
            <div className="add_staff_form_group">
              <input type="text" placeholder="Last Name" value={"Victor"} />
              <input type="text" placeholder="First Name" value={"Adigun"} />
            </div>
            <div className="add_staff_form_group">
              <input type="text" placeholder="Department" value={"Kitchen"} />
              <input type="text" placeholder="Job Title" value={"Chef"} />
            </div>
            <div className="add_staff_form_group">
              <input
                type="text"
                placeholder="Address"
                value={"no 134 Mobolaji Johnson station,  Alagomeji"}
              />
              <select name="" id="" value={"Male"}>
                <option disabled value="Gender">
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="add_staff_form_group">
              <select name="" id="" value={"Full time"}>
                <option disabled value="Employment status">
                  Employment Status
                </option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
              <input type="text" placeholder="Age" value={"21"} />
            </div>
            <div className="add_staff_form_group">
              <input
                type="text"
                placeholder="Phone Number"
                value={"07045678912"}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={"Epondeji@victor.com"}
              />
            </div>
            <input type="submit" value={"Update"} />
          </form>
        </div>

        <div className="side_footer">waleVaries</div>
      </div>
    </main>
  );
};

export default Dashboard;
