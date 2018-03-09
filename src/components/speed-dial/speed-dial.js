import React, { Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FabSpinner from './fab-spinner';

const styles = {

  container: {
    position: "relative",
    display: "inline-block"
  }

};


class SpeedDial extends Component {
    state = {
        internalOpen: false
    };


    handleFabTouchTap = () => {

        this.setState({ internalOpen: !this.state.internalOpen });

        let cb = this.props.onOpenCloseRequest;
        cb && cb();

    };


    handleCloseRequest = () => {
        this.handleFabTouchTap();
    };

    render () {

        let { open, effect, style } = this.props;

        if (open === undefined)
          open = this.state.internalOpen;

        if (effect === undefined)
          effect = "fade-staggered";

        let enhancedChildren = React.Children.map(this.props.children,
          (child, index) => React.cloneElement(child, {
            effect,
            index,
            visible: open,
            onCloseRequest: this.handleCloseRequest
          })
        );

        return (

             <div style={{...styles.container, ...style}}>

              <FloatingActionButton
                {...this.props.fabProps}
                onClick={this.handleFabTouchTap}
                mini={false}
              >
                <FabSpinner
                  aContent={this.props.fabContentOpen}
                  bContent={this.props.fabContentClose || this.props.fabContentOpen}
                  showB={open}
                />
              </FloatingActionButton>

              {enhancedChildren}

            </div>

        )

    }

}


export default SpeedDial;