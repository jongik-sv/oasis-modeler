import React from 'react'
import './App.css';
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'
import Bpmn from './bpmn/Bpmn'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { green } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx'
/////////////////////////////////////////////////////////
// Basic vertical re-flex layout with splitter
// Adding a splitter between two ReflexElements
// will allow the user to resize them
//
/////////////////////////////////////////////////////////
class OasisModelerLayout extends React.Component {

  propertiesPanelParentClickHandler = () => {
    console.log(this);

  }

  render () {

    return (
      <ReflexContainer orientation="vertical">

        <ReflexElement className="left-pane" flex={0.9}>
          <Bpmn></Bpmn>

          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon  />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </ReflexElement>

        <ReflexSplitter/>
        <ReflexElement id="propertiesPanelParent" className="right-pane" size="300"
          minSize="300"
          maxSize="500">
          <div className="pane-content" style={{height: "30"}}>
            <div onClick={this.propertiesPanelParentClickHandler} >
              <h1>Properties</h1>
            </div>
          </div>
          <div id="properties-panel-parent" >

          </div>
        </ReflexElement>

      </ReflexContainer>
    )
  }
}

export default OasisModelerLayout;