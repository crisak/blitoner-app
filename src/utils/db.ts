import { Project } from '@/app/proyectos/models'
import { Category } from '@/models/categories-summary.models'

interface DBModel {
  projects: Project[]
  projectSummary?: Category[]
}

const db = {
  // projects: [],
  projects: [
    {
      id: 'id1',
      userID: 'usuario1',
      name: 'Distopica',
      /**
       * ISO 8601
       */
      date: '2021-04-26T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/distopica-1.jpg',
      description:
        'Proyecto realizado junto a KL Security para Alumaderas de la costa en la ciudad de Cartagena.',
      categoryID: 'graffiti-category-id',
      nameCategory: 'Graffiti',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Bosa centro',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id2',
      userID: 'usuario1',
      name: 'Dojo',
      /**
       * ISO 8601
       */
      date: '2021-04-27T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/dojo-1.jpg',
      description: 'Proyecto realizado free style',
      categoryID: 'graffiti-category-id',
      nameCategory: 'Graffiti',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Bosa centro',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id3',
      userID: 'usuario1',
      name: 'La Muchacha',
      /**
       * ISO 8601
       */
      date: '2021-06-27T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/la-muchacha-1.jpg',
      description: 'Proyecto realizado free style',
      categoryID: 'graffiti-category-id',
      nameCategory: 'Graffiti',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id4',
      userID: 'usuario1',
      name: 'Sabor Latino',
      /**
       * ISO 8601
       */
      date: '2021-06-29T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/sabor-latino-1.jpg',
      description:
        'Intervención libre realizada en el Colegio Nuestra Sra de la Misericordia. Técnica: Mixta. Dim:. 6.2m. X 2.6m.',
      categoryID: 'graffiti-category-id',
      nameCategory: 'Graffiti',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id5',
      userID: 'usuario1',
      name: 'Unstoppable',
      /**
       * ISO 8601
       */
      date: '2021-06-23T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/unstoppable-1.jpg',
      description: 'Proyecto realizado free style.',
      categoryID: 'graffiti-category-id',
      nameCategory: 'Graffiti',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id6',
      userID: 'usuario1',
      name: 'Antigonas',
      /**
       * ISO 8601
       */
      date: '2022-03-23T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/antigonas-1.jpg',
      description: 'Proyecto realizado free style.',
      categoryID: 'participacion-social-category-id',
      nameCategory: 'Participación social',
      tags: 'participacion-social',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id7',
      userID: 'usuario1',
      name: 'Festival XIUA Sibate',
      /**
       * ISO 8601
       */
      date: '2017-03-23T00:00:00.000Z',
      banner:
        'https://blito-app.s3.amazonaws.com/media/festival-xiua-sibate-1.jpg',
      description: `Participación en el XVII Festival XIUA, en el que se conmemoran los 50 años del municipio.
      Obra por: Colectivo artístico Loxorea (SLC). Blito, Xonrie. Técnica: Mixta. Dim:. 18m. X 2.5m.`,
      categoryID: 'participacion-social-category-id',
      nameCategory: 'Participación social',
      tags: 'participacion-social',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: { latitude: 4.62412412165216, longitude: -74.19447126297898 },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id8',
      userID: 'usuario1',
      name: 'Latinos',
      /**
       * ISO 8601
       */
      date: '2017-03-23T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/latinos-1.jpg',
      description:
        'Intervención libre realizada en el barrio León 13. Obra por: Blito. Técnica: Mixta. Dim:. 9m. X 2.6m. ',
      categoryID: 'participacion-social-category-id',
      nameCategory: 'Participación social',
      tags: 'graffiti',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id8',
      userID: 'usuario1',
      name: 'Semillas de Tibanica',
      /**
       * ISO 8601
       */
      date: '2017-03-28T00:00:00.000Z',
      banner:
        'https://blito-app.s3.amazonaws.com/media/semillas-de-tibanica-1.jpg',
      description: 'Semillero realizado en colegio de Bosa Carbonel.',
      categoryID: 'participacion-social-category-id',
      nameCategory: 'Participación social',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id9',
      userID: 'usuario1',
      name: 'Car Wash Pits JNS',
      /**
       * ISO 8601
       */
      date: '2020-03-28T00:00:00.000Z',
      banner:
        'https://blito-app.s3.amazonaws.com/media/car-wash-pits-njs-1.jpg',
      description:
        'Proyecto realizado para el car wash Pits JNS ubicado en la ciudad de Bogotá. Técnica: Mixta. Dim:. 6.2m. X 5m.',
      categoryID: 'publicidad-coorporativa-category-id',
      nameCategory: 'Publicidad Corporativa',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        },
        {
          name: 'Angie',
          username: 'Chema',
          email: 'chema@gmail.com',
          photoUrl: '',
          socials: []
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id10',
      userID: 'usuario1',
      name: 'Dos Careloquitos',
      /**
       * ISO 8601
       */
      date: '2020-03-28T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/dos-careloquitos-1.jpg',
      description: 'Proyecto free style.',
      categoryID: 'publicidad-coorporativa-category-id',
      nameCategory: 'Publicidad Corporativa',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        },
        {
          name: 'Angie',
          username: 'Chema',
          email: 'chema@gmail.com',
          photoUrl: '',
          socials: []
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id11',
      userID: 'usuario1',
      name: 'Freddy Styles',
      /**
       * ISO 8601
       */
      date: '2022-03-12T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/freddy-styles-1.jpg',
      description: 'Diseño interno',
      categoryID: 'publicidad-coorporativa-category-id',
      nameCategory: 'Publicidad Corporativa',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        },
        {
          name: 'Angie',
          username: 'Chema',
          email: 'chema@gmail.com',
          photoUrl: '',
          socials: []
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id12',
      userID: 'usuario1',
      name: 'KL Alumaderas',
      /**
       * ISO 8601
       */
      date: '2022-08-12T00:00:00.000Z',
      banner: 'https://blito-app.s3.amazonaws.com/media/kl-alumaderas-1.jpg',
      description: 'Diseño interno',
      categoryID: 'publicidad-coorporativa-category-id',
      nameCategory: 'Publicidad Corporativa',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        },
        {
          name: 'Angie',
          username: 'Chema',
          email: 'chema@gmail.com',
          photoUrl: '',
          socials: []
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    },
    {
      id: 'id13',
      userID: 'usuario1',
      name: 'KL Cerrajeria OSMA',
      /**
       * ISO 8601
       */
      date: '2021-08-12T00:00:00.000Z',
      banner:
        'https://blito-app.s3.amazonaws.com/media/kl-cerrajeria-osma-1.jpg',
      description: 'Diseño interno',
      categoryID: 'publicidad-coorporativa-category-id',
      nameCategory: 'Publicidad Corporativa',
      tags: 'Publicidad Corporativa',
      collaborators: [
        {
          name: 'Pablo Guerrero',
          username: 'Blito',
          email: 'loxoreacrew@gmail.com',
          photoUrl:
            'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-19/314595041_1187447832188078_7881917292405519348_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaJd3zsD3wEAX_MHZwz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCDOgEd--kcjIkpyGwCIr5t0pdzj6ZiVcaI_-WlpQLNXg&oe=6389227F&_nc_sid=8fd12b',
          socials: [
            {
              id: 1,
              url: 'https://www.facebook.com/loxorea',
              username: 'blito',
              type: 'FACEBOOK'
            },
            {
              id: 2,
              url: 'https://www.instagram.com/blito.col/',
              username: '@saborlatinocallejero',
              type: 'INSTAGRAM'
            },
            {
              id: 3,
              url: 'https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ',
              username: 'Blito',
              type: 'YOUTUBE'
            }
          ]
        }
      ],
      location: {
        position: {
          latitude: 4.4920554468955105,
          longitude: -74.25902608978133
        },
        address: 'Chapinero',
        /**
         * Stands CODE with ISO
         */
        country: 'Colombia',
        state: 'Bogota'
      }
    }
  ]
} as DBModel

export default db
