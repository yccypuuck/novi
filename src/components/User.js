import React from 'react';
import Table from './table';
import makeData from './makeData'
import 'bootstrap/dist/css/bootstrap.min.css';

function NewUsers() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'avatar',
            accessor: 'avatar',
          },
          {
            Header: 'username',
            accessor: 'username',
          },
          {
            Header: 'Full Name',
            accessor: 'fullName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Closed Ontime',
            accessor: 'issuesOntime',
          },
          {
            Header: 'Closed OverDue',
            accessor: 'issuesOverdue',
          },
          {
            Header: 'Batting Average',
            accessor: 'battingAverage',
          },
          {
            Header: 'SP Closed',
            accessor: 'storyPoints',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(30), [])

  return (
    <Table columns={columns} data={data} />
  )
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      data: [
        [10, 30, 40, 20],
        [10, 40, 30, 20, 50, 10],
        [60, 30, 40, 20, 30]

      ],
      width: 700,
      height: 500,
    };
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
        <NewUsers />
        {/* <Contacts contacts={this.state.contacts} /> */}
        {/* <div className="App">
                    <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
                </div> */}
      </div>
    );
  }
}

export default User;