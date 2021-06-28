import React from 'react';
import './contacts.css';

class Contacts extends React.Component {

    render() {
        return (<div>
            {this.props.contacts.map(contact => (
                <div
                    key={contact.id}
                    className="card"
                    onClick={() => {
                        console.log('Hello, ' + contact.first_name );
                    }}
                >
                    <div className="card-body">
                        <h5 className="card-title">{contact.first_name} {contact.last_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.email}@gmail.com</h6>
                    </div>
                </div>
            ))
            }
        </div>
        );
    }
}

export default Contacts




    // {
    //     this.props.contacts.map(function (contact) {
    // < div class="card" onClick = { sayHello } >
    //     <div class="card-body">
    //         <h5 class="card-title">{contact.first_name} {contact.last_name}</h5>
    //         <h6 class="card-subtitle mb-2 text-muted">{contact.email}@gmail.com</h6>
    //     </div>
    //     </div >
//     })
// }