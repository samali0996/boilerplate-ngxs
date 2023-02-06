'use strict';
exports.__esModule = true;

module.exports = function (plop) {
  plop.setPartial('stateModelName', '{{pascalCase name}}StateModel');
  plop.setPartial('modelName', '{{pascalCase name}}Model');
  plop.setPartial('actionNameSpace', '{{pascalCase name}}');
  plop.setPartial('stateName', '{{pascalCase name}}State');
  plop.setPartial('selectorName', '{{pascalCase name}}Selector');
  plop.setPartial('newActionName', '{{pascalCase newAction}}');

  plop.setPartial('actionsFileName', '{{kebabCase name}}.action');
  plop.setPartial('modelFileName', '{{kebabCase name}}.model');
  plop.setPartial('stateFileName', '{{kebabCase name}}.state');
  plop.setPartial('selectorFileName', '{{kebabCase name}}.selector');

  plop.setPartial('getMap', 'get{{pascalCase  name}}Map');
  plop.setPartial('getById', 'get{{pascalCase name}}ById');
  plop.setPartial('nameRecordType', 'Record<string, {{>modelName}}>');

  plop.setHelper('actionConstructor', payloadType => {
    if (payloadType === null || payloadType === '') return '';
    return `constructor(public payload: ${payloadType}) {}`;
  });

  plop.setGenerator('ngxs Map Model', {
    description: 'Generate a new Ngxs Model file using Map pattern',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{kebabCase name}}/models/{{>modelFileName}}.ts',
        templateFile: 'plop_templates/model.ts.hbs',
      },
    ],
  });
  plop.setGenerator('ngxs Map Action', {
    description: 'Generate a new Ngxs Action file using Map pattern',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{ kebabCase name}}/action/{{>actionsFileName}}.ts',
        templateFile: 'plop_templates/action.ts.hbs',
      },
    ],
  });
  plop.setGenerator('ngxs Add Action', {
    description: 'Append a new Ngxs Action to an existing Action namespace',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Namespace: ',
      },
      {
        type: 'input',
        name: 'newAction',
        message: 'Action Name: ',
      },
      {
        type: 'input',
        name: 'payloadType',
        message: 'Enter payload type (empty if no payload): ',
      },
    ],
    actions: [
      {
        type: 'modify',
        path: 'src/app/{{ kebabCase name}}/action/{{>actionsFileName}}.ts',
        pattern: /}\s*$/,
        template: '',
      },
      {
        type: 'append',
        path: 'src/app/{{ kebabCase name}}/action/{{>actionsFileName}}.ts',
        templateFile: 'plop_templates/append-action.ts.hbs',
      },
    ],
  });
  plop.setGenerator('ngxs Map State', {
    description: 'Generate a new Ngxs State file using Map pattern',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{ kebabCase name}}/state/{{>stateFileName}}.ts',
        templateFile: 'plop_templates/state.ts.hbs',
      },
    ],
  });
  plop.setGenerator('ngxs Map Selector', {
    description: '',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{ kebabCase name}}/selector/{{>selectorFileName}}.ts',
        templateFile: 'plop_templates/selector.ts.hbs',
      },
    ],
  });
};
