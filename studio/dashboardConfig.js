export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f43227bc86c109e47dfb21c',
                  title: 'Sanity Studio',
                  name: 'jeremycaldwell-sanity-studio',
                  apiId: '3fdd04f7-bd2c-4a3d-bffa-fb8bac64d606'
                },
                {
                  buildHookId: '5f43227b542704e9bb6cd251',
                  title: 'Blog Website',
                  name: 'jeremycaldwell-sanity',
                  apiId: '504d394f-f1a7-41f8-8bfc-11e28c2b5f05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremycaldwell/jeremycaldwell-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jeremycaldwell-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
