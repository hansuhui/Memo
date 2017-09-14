import React from 'react';
import update from 'react-addons-update';

class ContactCreator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "",
      phone : ""
    }

  }

  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick(e){
    if(this.state.name == "" || this.state.name == undefined){
      alert("이름을 입력해주세요.");
      document.getElementById("name").focus();
      return;
    }
    if(this.state.phone == "" || this.state.phone == undefined){
      alert("핸드폰 번호를 입력해주세요.");
      document.getElementById("phone").focus();
      return;
    }


    this.props.onInsert(this.state.name,this.state.phone);
    this.setState({name : "",phone : ""})
  }

  render(){
    return (
      <div>
        <p>
          <input type="text" name="name" id="name" placeholder="이름" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <input type="text" name="phone" id="phone" placeholder="핸드폰" value={this.state.phone} onChange={this.handleChange.bind(this)} />
          <button type="button" onClick={this.handleClick.bind(this)}>입력</button>
        </p>
      </div>
    )
  }
}

export default ContactCreator;
