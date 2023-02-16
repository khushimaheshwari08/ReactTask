import React from "react";
import vectorIcon from "../../assets/Vector769.png";

const Section = () => {
  return (
    <div className="mainSection">
      <div className="section_divide">
        <div>
          <p className="heading_text">Find by Name or phone number</p>
        </div>
        <div className="section_sub_divide">
          <div className="section_heading">
            <p className="section_heading_text">Gender</p>
            <p>Female</p>
            <div>
              <img src={vectorIcon} alt="vector image" />
            </div>
          </div>
          <div className="section_heading">
            <p className="section_heading_text">Member Status</p>
            <p>Active Member</p>
            <div>
              <img src={vectorIcon} alt="vector icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <>
            <div className="section_block">
              <p className="section_block_heading">Diane Cooper</p>
              <p className="section_block_sub_heading">
                diane.cooper@example.com
              </p>
            </div>
            <div className="section_sub_block">
              <div className="section_block">
                <div>
                  <p className="section_heading_text text_font">Gender</p>
                  <p className="section_block_content ">Female</p>
                </div>
                <div className="horizontal_divider" />
                <div>
                  <p className="section_heading_text text_font">Birthday</p>
                  <p className="section_block_content ">Feb 24th,1997</p>
                </div>
                <div className="horizontal_divider" />
                <div>
                  <p className="section_heading_text text_font">Phone Number</p>
                  <p className="section_block_content ">(239) 555 -0108</p>
                </div>
                <div className="horizontal_divider" />
                <div>
                  <p className="section_heading_text text_font">
                    Member Status
                  </p>
                  <p className="section_block_content ">Active Member</p>
                </div>
              </div>
              <div className="section_block">
                <div>
                  <p className="number_text">15</p>
                  <p className="section_heading_text">Past</p>
                </div>
                <div className="horizontal_divider" />
                <div>
                  <p className="number_text">02</p>
                  <p className="section_heading_text">Upcoming</p>
                </div>
                <div className="view_report_text">
                  VIEW ECG
                  <br /> REPORT
                  <br /> DOCUMENTS
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </>
        );
      })}
    </div>
  );
};

export default Section;
