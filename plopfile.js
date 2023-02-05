
module.exports = function (plop) {
  plop.setPartial('stateModelName', '{{pascalCase name}}StateModel');
  plop.setPartial('modelName', '{{pascalCase name}}Model')
  plop.setPartial('actionName', '{{pascalCase name}}')
  plop.setPartial('stateName', '{{pascalCase name}}State')
  plop.setPartial('actionsFileName', '{{kebabCase name}}.action')
  plop.setPartial('modelFileName', '{{kebabCase name}}.model')
  plop.setPartial('stateFileName', '{{kebabCase name}}.state')


  plop.setGenerator('ngxsMapModel', {
    description: 'NGXS Map State Model',
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
  plop.setGenerator('ngxsMapAction', {
    description: 'Ngxs Map Action',
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
  })
  plop.setGenerator('ngxsMapState', {
    description: 'Ngxs Map State',
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
  })
};
