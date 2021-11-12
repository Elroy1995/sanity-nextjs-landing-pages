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
                  buildHookId: '618dbea1ba58aab2b1c49d4e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qjo1133r',
                  apiId: '09ca11ef-e88d-406b-b80d-a8a605c12af9'
                },
                {
                  buildHookId: '618dbea180e5fdbe74b3a3ae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yszo47m9',
                  apiId: 'e3b371e5-0fd8-4d00-aea7-f075dc644973'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Elroy1995/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yszo47m9.netlify.app', category: 'apps'}
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
