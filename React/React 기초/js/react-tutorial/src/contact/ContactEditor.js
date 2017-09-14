import React from 'react';
import update from 'react-addons-update';

class ContactEditor extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name : "",
      phone : ""
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {
        name : nextProps.contact.name,
        phone : nextProps.contact.phone
      });
  }

  handleClick(){
    if(!this.props.isSelected){
      console.log("선택을 해야 수정이 되겠지?");
      return;
    }

    this.props.onEdit(this.state.name,this.state.phone);

  }

  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render(){
    return (
      <div>
          <p>
              <input type="text"
                  name="name"
                  placeholder="성함"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}/>

              <input type="text"
                  name="phone"
                  placeholder="핸폰"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this)}/>
              <button onClick={this.handleClick.bind(this)}>
              수정
              </button>
            </p>
        </div>
    )
  }
}

export default ContactEditor;
