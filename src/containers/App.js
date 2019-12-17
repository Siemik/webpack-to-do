import React from 'react';
import uuid from 'uuid';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    //metoda remove todo App
    removeTodo(id) {
      const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }

    //metoda remainder
    render() {
    return (
            <div className={style.TodoApp}>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
          );
    }
}

export default App;
