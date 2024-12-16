import React, { useEffect, useState } from "react";

function Bodytimesheet() {
  const [data, setData] = useState([]);
  const [monday, setMonday] = useState(0);
  const [tuesday, setTuesday] = useState(0);
  const [wednesday, setWednesday] = useState(2);
  const [thursday, setThursday] = useState(0);
  const [friday, setFriday] = useState(0);
  const [saturday, setSaturday] = useState(0);
  const [sunday, setSunday] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(data);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const url = "http://localhost:5000/data";
  //     const api = await fetch(url);
  //     const data = await api.json();
  //     console.log(data);

  //     if (data) {
  //       setData(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };/

  const dummydata = {
    "startDate": "01/01/2024",
    "endDate": "08/01/2024",
    "noOfDays": "7",
    "noOfHours": "40",
    "week": "3",
    "weekNoDate": "June 12-18",
    "chargeCodes": [
      {
        "type": "Regular Time",
        "mon": "0",
        "tue": "0",
        "wed": "0",
        "thu": "0",
        "fri": "0",
        "sat": "0"
      },
      {
        "type": "Over Time",
        "mon": "0",
        "tue": "0",
        "wed": "0",
        "thu": "0",
        "fri": "0",
        "sat": "0"
      },
      {
        "type": "Paid Vacation",
        "mon": "0",
        "tue": "0",
        "wed": "0",
        "thu": "0",
        "fri": "0",
        "sat": "0"
      },
      {
        "type": "Unpaid Vacation",
        "mon": "0",
        "tue": "0",
        "wed": "0",
        "thu": "0",
        "fri": "0",
        "sat": "0"
      }
    ]
  }

  console.log(dummydata);

  return (
    <>
      <div className="info-container">
        <div className="info-item">
          Start Date: <strong>{dummydata?.startDate}</strong>
        </div>
        <div className="info-item">
          End Date: <strong>{dummydata?.endDate}</strong>
        </div>
        <div className="info-item">
          Number of Days: <strong>{dummydata?.noOfDays}</strong>
        </div>
        <div className="info-item">
          Number of Hours: <span class="highlight">{dummydata?.noOfHours}</span>
        </div>
      </div>

      <br />
      <div class="status-bar">
        <h3>
          Week {dummydata?.week} <span>{dummydata?.weekNoDate}</span>
        </h3>
        <div className="status-options">
          <label>
            <input type="checkbox" />
            <span className="status approved"></span> Approved
          </label>
          <label>
            <input type="checkbox" />
            <span className="status pending"></span> Pending Approval
          </label>
          <label>
            <input type="checkbox" />
            <span className="status holiday"></span> Weekend/Holiday
          </label>
          <label>
            <input type="checkbox" />
            <span className="status leave"></span> Leave
          </label>
        </div>
      </div>

      <table className="time-table">
        <thead>
          <tr>
            <th>Charge Code</th>
            <th>Mon, Feb 19</th>
            <th>Tue, Feb 20</th>
            <th>Wed, Feb 21</th>
            <th>Thu, Feb 22</th>
            <th>Fri, Feb 23</th>
            <th>Sat, Feb 24</th>
            <th>Sun, Feb 25</th>
            <th>Row Total</th>
          </tr>
        </thead>

        <tbody>
          {dummydata &&
            dummydata.chargeCodes.map((eachItem) => {
              return (
                <>
                  <tr>
                    <td style={{ width: "100px" }}>{eachItem.type}</td>
                    <td>
                      <input
                        type="text"
                        className="input-monday"
                        value={eachItem.mon}
                        onChange={(e) => {
                          setMonday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-tuesday"
                        value={eachItem.tue}
                        onChange={(e) => {
                          setTuesday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-wednesday"
                        value={eachItem.wed}
                        onChange={(e) => {
                          setWednesday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-thursday"
                        value={eachItem.thu}
                        onChange={(e) => {
                          setThursday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-friday"
                        value={eachItem.fri}
                        onChange={(e) => {
                          setFriday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-saturday"
                        value={eachItem.sat}
                        onChange={(e) => {
                          setSaturday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-sunday"
                        value={eachItem.sat}
                        onChange={(e) => {
                          setSunday(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input-total"
                        value={total}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Bodytimesheet;
