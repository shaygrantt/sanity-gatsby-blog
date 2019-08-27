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
                  buildHookId: '5d6472bf7b4b0788d02560cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j92cc4ff',
                  apiId: '327a5104-366c-4f31-9efd-c44026452bd5'
                },
                {
                  buildHookId: '5d6472bf9c58696987de081f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pidder84',
                  apiId: '1a79d15c-200b-4f1d-ac61-1e7fb47295d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kidshay/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pidder84.netlify.com', category: 'apps'}
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
