import React from "react";
import { Clock, Toggle } from '.';

const data = [
  { name: "Video1", text: "video 1 text" },
  { name: "Video2", text: "video 2 text" },
  { name: "Video3", text: "video 3 text" },
];


function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <table>
              {data.map(el => (
                <tr>
                  <td>{el.name}</td>
                  <td>{el.text}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              <div className="App">
                <Clock />
                <Toggle />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
