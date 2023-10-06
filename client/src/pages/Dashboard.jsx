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
const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="display">
        <div className="no_staffs">
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
          <img src={illustration} alt="illustration" />
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

          <form action="" className="add_staff_form">
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
          </form>
        </div>

        <div className="side_footer">waleVaries</div>
      </div>
    </main>
  );
};

export default Dashboard;