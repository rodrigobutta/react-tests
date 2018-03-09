import React, { Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton';

const styles = {

  itemContainer: {
    position: "absolute",
    right: 48,
    top: 20,

    WebkitTransform:  "translateY(-50%)",
    MozTransform:  "translateY(-50%)",
    MsTransform:  "translateY(-50%)",
    OTransform:  "translateY(-50%)",
    transform: "translateY(-50%)"
  }

};


const effects = {

  "none": (visible, index) => ({
    display: visible ? "" : "none"
  }),

  "fade-staggered": (visible, index) => ({
    transition: visible ? "450ms" : "300ms",
    transitionDelay: visible ? (index * 0.025) + "s" : "",
    transform: "translateY(" + (visible ? 0 : "5px") + ")",
    opacity: visible ? 1 : 0
  }),

  "fade":  (visible, index) => ({
    transition: visible ? "450ms" : "300ms",
    opacity: visible ? 1 : 0
  }),

  "slide": (visible, index) => ({
    transition: visible ? "250ms" : "300ms",
    transform: "translateY(" + (visible ? 0 : getYPos(index) + "px") + ")",
    opacity: visible ? 1 : 0
  })

};


function getYPos(index) {
  return 81 + index * 56;
}


class SpeedDialItem extends Component {
// export const SpeedDialItem = React.createClass({

    handleClick = () => {

        this.props.onCloseRequest();

        if (typeof this.props.onClick === 'function') {
            this.props.onClick(this);
        }

    }

    render() {

        const { index, visible } = this.props;

        let style = {
          pointerEvents: visible ? "" : "none",
          position: "absolute",
          whiteSpace: "nowrap",
          right: 8,
          bottom: getYPos(index)
        };

        let fx = effects[this.props.effect];
        if (!fx)
          fx = effects.none;

        style = { ...style, ...fx(visible, index) };

        return(

            <div style={style}>

                <div style={styles.itemContainer}>
                    {this.props.label}
                </div>

                <FloatingActionButton
                    mini={true}
                    secondary={true}
                    onClick={this.handleClick}
                >
                    {this.props.fabContent}
                </FloatingActionButton>

            </div>

        )

    }

}


export default SpeedDialItem;