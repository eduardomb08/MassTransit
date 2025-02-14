module.exports = {
  title: 'MassTransit',
  description: 'A free, open-source distributed application framework for .NET.',
  plugins: ['@vuepress/active-header-links'],
  themeConfig: {
    logo: '/mt-logo-small.png',
    algolia: {
      apiKey: 'e458b7be70837c0e85b6b229c4e26664',
      indexName: 'masstransit'
    },
    nav: [
      { text: "Blog", link: "/updates/" },
      { text: 'Gitter', link: 'https://gitter.im/MassTransit/MassTransit' },
      { text: 'NuGet', link: 'https://nuget.org/packages/MassTransit' }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Getting Started',
        path: '/getting-started/',
        collapsable: false,
        children: [
          '/getting-started/upgrade-v6'
        ]
      },
      {
        title: 'Using MassTransit',
        path: '/usage/',
        collapsable: false,
        children: [
          '/usage/configuration',
          {
            title: 'Transports',
            path: '/usage/transports/',
            collapsable: true,
            children: [
              '/usage/transports/rabbitmq',
              '/usage/transports/azure-sb',
              '/usage/transports/activemq',
              '/usage/transports/amazonsqs',
              '/usage/transports/in-memory',
            ]
          },
          '/usage/messages',
          '/usage/consumers',
          '/usage/producers',
          '/usage/exceptions',
          '/usage/requests',
          {
            title: 'Sagas',
            path: '/usage/sagas/',
            collapsable: true,
            children: [
              '/usage/sagas/automatonymous',
              '/usage/sagas/persistence'
            ]
          },
          {
            title: 'Containers',
            path: '/usage/containers/',
            collapsable: true,
            children: [
              ['/usage/containers/msdi', 'Microsoft'],
              ['/usage/containers/autofac', 'Autofac'],
              ['/usage/containers/castlewindsor', 'Castle Windsor'],
              ['/usage/containers/lamar', 'Lamar'],
              ['/usage/containers/simpleinjector', 'Simple Injector'],
              ['/usage/containers/structuremap', 'StructureMap'],
              ['/usage/containers/ninject', 'Ninject'],
              ['/usage/containers/unity', 'Unity']
            ]
          },
          ['/usage/testing', 'Testing'],
          {
            title: 'Advanced',
            collapsable: true,
            sidebarDepth: 2,
            children: [
              {
                title: 'Scheduling',
                path: '/advanced/scheduling/',
                collapsable: true,
                children: [
                  '/advanced/scheduling/scheduling-api',
                  '/advanced/scheduling/in-memory',
                  '/advanced/scheduling/azure-sb-scheduler',
                  '/advanced/scheduling/rabbitmq-delayed',
                  '/advanced/scheduling/redeliver'
                ]
              },
              {
                title: 'Courier',
                path: '/advanced/courier/',
                collapsable: true,
                children: [
                  '/advanced/courier/activities',
                  '/advanced/courier/builder',
                  '/advanced/courier/execute',
                  '/advanced/courier/events',
                  '/advanced/courier/subscriptions'
                ]
              },
              {
                title: 'Middleware',
                path: '/advanced/middleware/',
                collapsable: true,
                children: [
                  '/advanced/middleware/receive',
                  '/advanced/middleware/circuit-breaker',
                  '/advanced/middleware/rate-limiter',
                  '/advanced/middleware/latest',
                  '/advanced/middleware/transactions',
                  '/advanced/middleware/custom'
                ]
              },
              '/usage/message-data',
              {
                title: 'Monitoring',
                collapsable: true,
                children: [
                  '/advanced/monitoring/diagnostic-source',
                  '/advanced/monitoring/applications-insights',
                  '/advanced/monitoring/perfcounters',
                ]
              },
              '/advanced/connect-endpoint',
              '/advanced/observers',
              {
                title: 'Topology',
                path: '/advanced/topology/',
                collapsable: true,
                children: [
                  '/advanced/topology/message',
                  '/advanced/topology/publish',
                  '/advanced/topology/send',
                  '/advanced/topology/consume',
                  '/advanced/topology/conventions',
                  '/advanced/topology/rabbitmq',
                  '/advanced/topology/servicebus',
                ]
              },
              {
                title: 'SignalR',
                path: '/advanced/signalr/',
                collapsable: true,
                children: [
                  '/advanced/signalr/quickstart',
                  '/advanced/signalr/hub_endpoints',
                  '/advanced/signalr/interop',
                  '/advanced/signalr/sample',
                  '/advanced/signalr/considerations'
                ]
              },
              'advanced/audit',
              'advanced/batching',
              'advanced/turnout/'
            ]
          }
        ]
      },
      {
        title: 'Getting Help',
        path: '/learn/',
        collapsable: true,
        children: [
          '/troubleshooting/common-gotchas',
          '/troubleshooting/show-config',
          '/learn/samples',
          '/learn/videos',
          '/learn/courses',
          '/learn/loving-the-community',
          '/learn/contributing'
        ]
      },
      {
        title: "Reference",
        children: [
          '/architecture/packages',
          '/architecture/interoperability',
          '/architecture/versioning',
          '/architecture/encrypted-messages',
          '/architecture/green-cache',
          '/architecture/history'
        ]
      }
    ],
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    repo: 'MassTransit/MassTransit',

    docsRepo: 'MassTransit/MassTransit',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: 'Help us by improving this page!'
  }
}
