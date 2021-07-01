import React from 'react';
import Table from './Table';
import dataUsers from './dataUsers'
import 'bootstrap/dist/css/bootstrap.min.css';

const user_columns = [
  { title: 'avatar', field: 'avatar', },
  { title: 'username', field: 'id', },
  { title: 'Full Name', field: 'fullName', },
  { title: 'Closed Ontime', field: 'issuesOntime', },
  { title: 'Closed OverDue', field: 'issuesOverdue', },
  { title: 'Batting Average', field: 'battingAverage', },
  { title: 'SP Closed', field: 'storyPoints', },
]

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataUsers(30),
      columns: user_columns,
    };
    console.log(this.state.data)
  }

  handleClick() {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
  }

  // componentDidMount() {
  //     fetch('https://mockend.com/yccypuuck/novi/users?limit=3')
  //         .then(res => res.json())
  //         .then((data) => {
  //             this.setState({ contacts: data })
  //         })
  //         .catch(console.log)
  // }



  render() {
    return (
      <div>
        {/* <NewUsers /> */}
        <Table columns={this.state.columns} data={this.state.data} />

        {/* <Contacts contacts={this.state.contacts} /> */}
        {/* <div className="App">
                    <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
                </div> */}
      </div>
    );
  }
}
export default User;