export default function (plop) {
  plop.setGenerator('feature', {
    description: 'Create a new feature',
    prompts: [
      {
        type: 'input',
        name: 'featureName',
        message: 'What is your feature name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/index.ts',
        templateFile: 'generators/features/featureEntrypoint.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/api/index.ts',
        templateFile: 'generators/features/api.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/assets/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/components/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/hooks/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/stores/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/types/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase featureName}}/utils/.gitkeep',
        templateFile: 'generators/features/gitkeep.hbs',
      },
      {
        type: 'addMany',
        destination: 'src/features/{{camelCase featureName}}/routes/',
        base: 'generators/features/routes/',
        templateFiles: 'generators/features/routes/**',
      },
    ],
  })
}
