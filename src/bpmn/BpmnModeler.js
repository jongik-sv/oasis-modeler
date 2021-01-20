// import alignToOriginModule from '@bpmn-io/align-to-origin';
// import addExporterModule from '@bpmn-io/add-exporter';
// import executableFixModule from 'bpmn-js-executable-fix';
// import completeDirectEditingModule from './features/complete-direct-editing';
// import globalClipboardModule from './features/global-clipboard'
// import handToolOnSpaceModule from './features/hand-tool-on-space';
// import propertiesPanelKeyboardBindingsModule from './features/properties-panel-keyboard-bindings';
// import Flags, { DISABLE_ADJUST_ORIGIN } from '../../../../util/Flags';
// import signavioCompatModule from 'bpmn-js-signavio-compat';
// import disableCollapsedSubprocessModule from 'bpmn-js-disable-collapsed-subprocess';

import BpmnModeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';
import diagramOriginModule from 'diagram-js-origin';
import camundaModdlePackage from 'camunda-bpmn-moddle/resources/camunda';
import camundaModdleExtension from 'camunda-bpmn-moddle/lib';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
// import glue2bpmn from "./glue/Glue2Bpmn";
import xelementTemplates from "../elementTemplates/elementTemplatesImport";


import 'bpmn-js-properties-panel/styles/properties.less';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

import 'diagram-js-minimap/assets/diagram-js-minimap.css';

export default class OasisBpmnModeler extends BpmnModeler {

  constructor(options = {}) {

    const {
      moddleExtensions,
      ...otherOptions
    } = options;

    super({
      ...otherOptions,
      keyboard: {
          bindTo: document
      },
      elementTemplates: xelementTemplates,
      moddleExtensions: {
        camunda: camundaModdlePackage,
        ...(moddleExtensions || {})
      }
    });
  }
}

const defaultModules = BpmnModeler.prototype._modules;

const extensionModules = [
  camundaModdleExtension,
  diagramOriginModule,
  minimapModule,
  propertiesPanelModule,
  propertiesProviderModule,
  // addExporterModule,
  // completeDirectEditingModule,
  // executableFixModule,
  // Flags.get(DISABLE_ADJUST_ORIGIN) ? diagramOriginModule : alignToOriginModule,
  // propertiesPanelKeyboardBindingsModule,
  // globalClipboardModule,
  // handToolOnSpaceModule,
  // signavioCompatModule,
  // disableCollapsedSubprocessModule
];

OasisBpmnModeler.prototype._modules = [
  ...defaultModules,
  ...extensionModules
];