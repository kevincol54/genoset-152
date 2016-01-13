var gql = require('gql')

module.exports = gql.or([
  gql.exact('rs4244285', 'AA'),
  gql.exact('rs17878459', 'CC'),
  gql.exact('rs4986893', 'AA'),
  gql.exact('rs57081121', 'AA'),
  gql.exact('rs28399504', 'GG'),
  gql.exact('rs41291556', 'CC'),
  gql.exact('rs17884712', 'AA'),
  gql.exact('rs6413438', 'TT'),
  gql.exact('rs17879685', 'TT'),
  gql.and([
    gql.or([
      gql.exact('rs4244285', 'AG'),
      gql.exact('rs17878459', 'CG')
    ]),
    gql.or([
      gql.or([
        gql.exact('rs4986893', 'AG'),
        gql.exact('rs57081121', 'AG')
      ]),
      gql.exact('rs28399504', 'AG'),
      gql.exact('rs41291556', 'CT'),
      gql.exact('rs17884712', 'AG'),
      gql.exact('rs6413438', 'CT')
    ]),
    gql.and([
      gql.or([
        gql.exact('rs4986893', 'AG'),
        gql.exact('rs57081121', 'AG')
      ]),
      gql.or([
        gql.exact('rs28399504', 'AG'),
        gql.exact('rs41291556', 'CT'),
        gql.exact('rs17884712', 'AG'),
        gql.exact('rs6413438', 'CT')
      ])
    ]),
    gql.and([
      gql.exact('rs28399504', 'AG'),
      gql.or([
        gql.exact('rs41291556', 'CT'),
        gql.exact('rs17884712', 'AG'),
        gql.exact('rs6413438', 'CT')
      ])
    ]),
    gql.and([
      gql.exact('rs41291556', 'CT'),
      gql.or([
        gql.exact('rs17884712', 'AG'),
        gql.exact('rs6413438', 'CT')
      ])
    ]),
    gql.and([
      gql.exact('rs17884712', 'AG'),
      gql.exact('rs6413438', 'CT')
    ])
  ])
])
