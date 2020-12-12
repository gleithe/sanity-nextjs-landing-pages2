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
                  buildHookId: '5fd50fd6260f0575db30ab46',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-j15jpozm',
                  apiId: '6bc4f908-cf1f-4f52-b3c0-813255024712'
                },
                {
                  buildHookId: '5fd50fd62f090e146038a82b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-ijfotnyp',
                  apiId: '9d549351-3022-470f-b98d-bf66a296c0ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gleithe/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-ijfotnyp.netlify.app', category: 'apps'}
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
