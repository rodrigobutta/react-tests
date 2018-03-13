import React, { Component } from 'react'

import { CSSTransitionGroup } from 'react-transition-group';
import { CSSTransition, transit } from "react-css-transition";

import './Animation.css';



const styles = {
  defaultStyle: {
    transform: "translate(0, 0)",
  },
  enterStyle: {
    transform: transit("translate(175px, 0)", 500, "ease-in-out"),
  },
  leaveStyle: {
    transform: transit("translate(0, 0)", 500, "ease-in-out"),
  },
  activeStyle: {
    transform: "translate(175px, 0)",
  },
};

const classes = {
  defaultClassName: "default-class2",
  enterClassName: "enter-class2",
  leaveClassName: "leave-class2",
  activeClassName: "active-class2"
};


class Animation extends Component {
    state = {
        active: false
    };

    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
          prompt('Enter some text')
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }


    handleClick = () => {
       this.setState({active: !this.state.active});
     }


  render () {

    const items = this.state.items.map((item, i) => (
     <div key={item} onClick={() => this.handleRemove(i)}>
       {item}
     </div>
    ));



    return(
        <div>
            <CSSTransitionGroup
                 transitionName="example"
                 transitionAppear={true}
                 transitionAppearTimeout={500}
                 transitionEnter={false}
                 transitionLeave={false}>

            <h2>Modulo Animation</h2>

            </CSSTransitionGroup>

            <button onClick={this.handleAdd}>Add Item</button>
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {items}
            </CSSTransitionGroup>


            <CSSTransition {...classes} active={this.state.active}>
                <h2>ANIMAME</h2>
            </CSSTransition>

            <button onClick={this.handleClick} >Cambiar State</button>


        </div>


    )

  }

}

export default Animation;