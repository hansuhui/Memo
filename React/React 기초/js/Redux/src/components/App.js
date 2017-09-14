import React from 'react';

class App extends React.Component {

    constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    increase(diff){
      return {
        type: "INCREMENT",
        addBy : diff
      };
    }

    onClick(){
      this.props.store.dispatch(this.increase(1));
    }
    render(){


      let conterStyle = {
        position : "fixed",
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-505)",
        WebkitUserSelect : "none",
        MsUserSelect : "none",
        userSelect :  "none",
        cursor  : "pointer"
      }
        return (
                <div onClick={this.onClick} style={conterStyle}>
                  <h1>{this.props.store.getState().value}</h1>
                </div>
        );
    }
}

export default App;
