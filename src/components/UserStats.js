import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import dataUsers from './dataUsers';
import LineChart from './LineChart';

const user_columns = [
  { title: 'avatar', field: 'avatar', },
  {
    title: 'username',
    field: 'id',
    cellStyle: {
      padding: 0,
      margin: 0,
    }
  },
  // { title: 'Full Name', field: 'fullName', },
  { title: 'Batting Average', field: 'battingAverage', defaultSort: "desc" },
]

class UserStats extends React.Component {
  constructor(props) {
    super(props);
    const user_data = dataUsers(8);
    this.state = {
      data: user_data,
      columns: user_columns,
    };
  }

  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-8" style={{ "height": "500px" }}>
              <LineChart data={this.state.data} />
            </div>
            <div className="col-lg-4">
              {/* <h1 className="font-weight-light">Leaderboard</h1> */}
              <p>
                <div className="App">
                  <Table title='Leaderboard' columns={this.state.columns} data={this.state.data} />

                  {/* <br /> Table 2 data */}
                  {/* <Table2 data={this.state.tableData2} /> */}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default UserStats;