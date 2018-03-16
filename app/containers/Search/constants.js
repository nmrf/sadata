export const DEPENDENCIES = [
  'pages',
  'taxonomies',
  'categories',
  'indicators',
  'measures',
  'recommendations',
  'sdgtargets',
  'progress_reports',
];

export const UPDATE_QUERY = 'impactoss/Search/UPDATE_QUERY';
export const RESET_SEARCH_QUERY = 'impactoss/Search/RESET_SEARCH_QUERY';


export const CONFIG = {
  search: [
    {
      group: 'entities',
      targets: [
        {
          path: 'measures',
          clientPath: 'actions',
          search: ['title', 'description', 'outcome', 'indicator_summary'],
          sorting: [
            {
              attribute: 'id', // proxy for created at
              type: 'number',
              order: 'desc',
              default: true,
            },
            {
              attribute: 'title',
              type: 'string',
              order: 'asc',
            },
            {
              attribute: 'updated_at',
              type: 'date',
              order: 'desc',
            },
          ],
        },
        {
          path: 'indicators',
          search: ['title', 'description', 'reference'],
        },
        {
          path: 'recommendations',
          search: ['title', 'response', 'reference'],
        },
        {
          path: 'sdgtargets',
          search: ['title', 'description', 'reference'],
        },
        {
          path: 'progress_reports',
          clientPath: 'reports',
          search: ['title', 'description', 'document_url'],
        },
      ],
    },
    {
      group: 'taxonomies',
      search: [{
        attribute: 'title',
        as: 'taxonomy',
      }],
      categorySearch: ['title', 'short_title', 'description', 'url', 'taxonomy'],
    },
    {
      group: 'content',
      targets: [
        {
          path: 'pages',
          search: ['title', 'content', 'menu_title'],
        },
      ],
    },
  ],
};
