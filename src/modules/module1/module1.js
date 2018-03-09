import React, { Component } from 'react'


import { SpeedDial, SpeedDialItem } from "../../components/speed-dial";
import AddIcon from 'material-ui/svg-icons/content/add';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import TestIcon1 from 'material-ui/svg-icons/av/playlist-add';
import TestIcon2 from 'material-ui/svg-icons/action/note-add';


class Module1App extends Component {

  render () {

    return(
        <div>
            <h2>Modulo 1</h2>


            <SpeedDial
                fabContentOpen={<AddIcon />}
                fabContentClose={<CloseIcon />}
            >

                <SpeedDialItem
                    label="new game"
                    fabContent={<TestIcon1/>}
                    // onClick={this.startNewGame}
                />

                <SpeedDialItem
                    label="new page"
                    fabContent={<TestIcon2/>}
                    // onClick={this.startNewPage}
                />

            </SpeedDial>



        </div>
    )

  }

}

export default Module1App;