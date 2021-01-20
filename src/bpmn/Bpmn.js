import React, { Component} from 'react';
import Modeler from "./BpmnModeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";
import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { green } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx';
// import { debounce } from './util' ;
// import PropertiesContainer from './PropertiesContainer';
// import '../App.css';

const defaultXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" id="simple" targetNamespace="http://bpmn.io/schema/bpmn" exporter="camunda modeler" exporterVersion="2.6.0" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:process id="Process_1" isExecutable="false" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;

function ActionButton({ actionButtonId, actionButtonClass, onClick }) {
return <div id={actionButtonId} className={actionButtonClass} onClick={onClick} />

}
  
class Bpmn extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.ref = React.createRef();
        this.propertiesPanelRef = React.createRef();

        // this.handleResize = debounce(this.handleResize);
    }

    async componentDidMount() {
        this._isMounted = true;

        const {
          layout
        } = this.props;
    
        const { url, diagramXML} = this.props;
        const container = this.ref.current;
        // this.modeler = new Modeler({container});
        this.modeler = new Modeler();
        const modeler = this.modeler;
        // this.listen('on');

        this.modeler.attachTo(this.ref.current);

        const minimap = modeler.get('minimap');

        // if (layout.minimap) {
        //   minimap.toggle(layout.minimap && !!layout.minimap.open);
        // }
        const propertiesPanel = modeler.get('propertiesPanel');
        const propertiesPanelContainer = document.getElementById('properties-panel-parent')
        propertiesPanel.attachTo(propertiesPanelContainer);
        // propertiesPanel.attachTo(this.propertiesPanelRef.current);

        this.modeler.importXML(defaultXml);

    }

      
    render() {

      return (
        <div className={"container"}>
          <div className={"container"} ref={ this.ref }>
          <li>
                  <input type="button" id="js-debug1" value="#1" />
                  <input type="button" id="js-debug2" value="#2" />
                  <input type="button" id="js-debug3" value="#3" />
                  <input type="button" id="js-debug4" value="#4" />
                  <input type="button" id="js-debug5" value="#5" />
                  <input type="button" id="js-debug6" value="#6" />
                </li>

            <ActionButton
            actionButtonId="action-button-fit"
            actionButtonClass={`action-button`}
            onClick={() => console.log(this)}
            />
            <div className={"absolute-div"}>
   
            </div>            
          </div>


          {/* <ul class="buttons">
            <li>
              download
            </li>
            <li>
              <a id="js-download-diagram" href title="download BPMN diagram">
                BPMN diagram
              </a>
            </li>
            <li>
              <a id="js-download-svg" href title="download as SVG image">
                SVG image
              </a>
            </li>
            <li>
              <input type="button" id="js-debug1" value="#1" />
              <input type="button" id="js-debug2" value="#2" />
              <input type="button" id="js-debug3" value="#3" />
              <input type="button" id="js-debug4" value="#4" />
              <input type="button" id="js-debug5" value="#5" />
              <input type="button" id="js-debug6" value="#6" />
            </li>
          </ul> */}
        </div>
      );
    }   


    // listen(fn) {
    //     const modeler = this.modeler;
    
    //     [
    //       'import.done',
    //       'saveXML.done',
    //       'commandStack.changed',
    //       'selection.changed',
    //       'attach',
    //       'elements.copied',
    //       'propertiesPanel.focusin',
    //       'propertiesPanel.focusout',
    //       'directEditing.activate',
    //       'directEditing.deactivate',
    //       'searchPad.closed',
    //       'searchPad.opened'
    //     ].forEach((event) => {
    //       modeler[fn](event, this.handleChanged);
    //     });
    
    //     modeler[fn]('elementTemplates.errors', this.handleElementTemplateErrors);
    
    //     modeler[fn]('error', 1500, this.handleError);
    
    //     modeler[fn]('minimap.toggle', this.handleMinimapToggle);
    // }

    async openDiagram(xml){
        this.modeler.importXML(xml);

    }
}




export default Bpmn;