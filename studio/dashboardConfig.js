export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '602597c2f6ad9009ba018519',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-iabcmcta',
                  apiId: '9f0413a4-06f2-46de-a1ed-267e9e21d4b2'
                },
                {
                  buildHookId: '602597c2787cc609527c0463',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-fe7sfitm',
                  apiId: 'f8a28cae-5b02-4cc3-bde1-aa22fb28203f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reed-jones/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-fe7sfitm.netlify.app', category: 'apps'}
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
