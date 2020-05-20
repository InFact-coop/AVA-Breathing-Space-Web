export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec536bbed968192d894cb05',
                  title: 'Sanity Studio',
                  name: 'AVA-Breathing-Space-studio',
                  apiId: '7e9cba6a-e66c-4a40-8651-c044d9242837'
                },
                {
                  buildHookId: '5ec536bb2a7c916b7ad8227f',
                  title: 'Landing pages Website',
                  name: 'AVA-Breathing-Space',
                  apiId: '8f273ae6-20f2-44fe-b913-e3b45e68450a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxgerber/AVA-Breathing-Space',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://AVA-Breathing-Space.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
