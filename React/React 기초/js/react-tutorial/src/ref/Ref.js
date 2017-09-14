import React from 'react';
import update from 'react-addons-update';

class Ref extends React.Component{
  handleClick(){
    if(this.input.value == ""){
      this.input.value= "누른건가";
    }else{
      this.input.value= "";
    }
    this.input.focus();
  }

  render(){
    return (
      <div>
         <input ref={ref=>this.input = ref}/>
         <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default Ref;
