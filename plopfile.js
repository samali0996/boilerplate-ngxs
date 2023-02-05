
module.exports = function (plop) {

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
        path: 'src/app/{{kebabCase name}}/models/{{kebabCase name}}.model.ts',
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
        path: 'src/app/{{ kebabCase name}}/action/{{ kebabCase name}}.action.ts',
        templateFile: 'plop_templates/action.ts.hbs',
      },
    ],
  })
};
