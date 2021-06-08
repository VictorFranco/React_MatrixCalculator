import React, { createElement } from 'react';


class Matriz extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {

        let i = 0;
        let j = 0;
        let celda = <input name={i}/>
        for(i = 0; i<3; i++){
            console.log('[]')
            for(j = 0; j<3; j++){
                console.log('[]')
            }
        }
        
        
            
      console.log(this.state.value)
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}> 
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Generar matriz" />
          
        </form>

            <div id="Matriz">

            </div>

        </div>

      );
    }
  }



  export default Matriz;