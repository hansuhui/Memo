import React from 'react';
import update from 'react-addons-update';

import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';



class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ContactsData : [
        {name : "Abet",phone : "010-0000-0001"},
        {name : "Betty",phone : "010-0000-0002"},
        {name : "Chalie",phone : "010-0000-0003"},
        {name : "David",phone : "010-0000-0004"}
      ],
      selectedKey : -1,
      selected: {
                name: "",
                phone: ""
            }
    };
  }

  _editContact(name, phone){
    this.setState({
      ContactsData : update(this.state.ContactsData,
      {
        [this.state.selectedKey] : {name : {$set : name} , phone : {$set : phone}}
      }),
      selected : {
        name : name
        , phone : phone
      }
    })


  }

  _removeContact(){
    if(this.state.selectedKey == -1){
      console.log("키 선택 안되었다 키 선택해라");
      return;
    }

    this.setState({
      ContactsData : update(
        this.state.ContactsData,
        {$splice: [[this.state.selectedKey, 1]]}
      ),
      selectedKey: -1
      ,selected: {
                name: "",
                phone: ""
      }
    })

    console.log("지웠다 만족하냐");
  }

  _onSelect(key){
    if(key == this.state.selectedKey){
      console.log("선택 취소");
      this.setState(
        {
          selectedKey: -1
          ,selected: {
                    name: "",
                    phone: ""
          }
        });
      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.ContactsData[key]
    });

    console.log(key + " 번 선택");
  }

  _isSelected(key){
    if(key == this.state.selectedKey){ return true;}
    else{ return false;}
  }

  _insertContact(name, phone){
        let newState = update(this.state, {
            ContactsData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

  render(){
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
           {this.state.ContactsData.map((data,i) =>{
             return (<ContactInfo name={data.name} phone={data.phone}
                key={i} contactKey={i}
                 isSelected={this._isSelected.bind(this)(i)}
                 onSelect={this._onSelect.bind(this)}  />);
           })}
        </ul>
        <ContactCreator onInsert={this._insertContact.bind(this)}/>
        <ContactEditor onEdit={this._editContact.bind(this)}
                       isSelected={(this.state.selectedKey != -1)}
                       contact={this.state.selected} />
        <ContactRemover onRemove={this._removeContact.bind(this)} />
      </div>
    );
  }
}

class ContactInfo extends React.Component{

  shouldComponentUpdate(nextProps , nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  handleClick(){
    this.props.onSelect(this.props.contactKey);
  }

  render(){
    console.log("rendered: " + this.props.name);
    let getStyle = isSelect => {
      if(!isSelect) return;

      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      };
      return style;
    }

    return(
      <li  style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}>{this.props.name} {this.props.phone}</li>
    );
  }
}

export default Contact;
