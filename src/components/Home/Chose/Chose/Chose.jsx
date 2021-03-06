import React from "react";
import {
  faDesktop,
  faPumpSoap,
  faTaxi,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ChoseCard from "../ChoseCard/ChoseCard";
import chooseImage from "../Chose/chose.jpg";
import "./Choose.css";
const choseData = [
  {
    id: "647gdbdge64",
    choseTitle: "BEST DIAGNOSTICS",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faDesktop,
  },
  {
    id: "bdgs46357sb",
    choseTitle: "BEST MATERIALS",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faPumpSoap,
  },
  {
    id: "ggte6gbdge64",
    choseTitle: "BEST PROFESSIONAL",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faUser,
  },
  {
    id: "8kiys736bsg",
    choseTitle: "BEST SERVICES",
    choseDesc: "Lorem ipsum dolor sit amet, consectetur",
    choseIcon: faTaxi,
  },
];

const Chose = () => {
  return (
    <div className="chose-wrapper mb-5 ">
      <div className="container">
        <div className="row jsutify-content-center">
          <div className="col-md-5">
            <div className="chooseimg">
              <img
                style={{ width: "100%", height: "350px" }}
                src={chooseImage}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-7 ">
            <div
              className="titleDiv"
              style={{ marginBottom: "50px", marginTop: "-20px" }}
            >
              <h3 className="title ">Why Choose Us ?</h3>
            </div>
            <div className="row  justify-content-center">
              {choseData.map((data) => (
                <div className="col-sm-12 col-md-6">
                  <ChoseCard key={data.id} data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
