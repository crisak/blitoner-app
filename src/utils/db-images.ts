export interface CustomImage {
  original: string
  src: string
  width?: number
  height?: number
  alt?: string
  tags?: { value: string; title: string }[]
  caption?: string
  projectId: string
}

export const contentGallery: CustomImage[] = [
  {
    projectId: 'id1',
    src: 'https://blito-app.s3.amazonaws.com/media/distopica-1.jpg',
    original: 'https://blito-app.s3.amazonaws.com/media/distopica-1.jpg'
  },
  ...[...Array(7)].map((v_, x) => ({
    projectId: 'id2',
    src: `https://blito-app.s3.amazonaws.com/media/dojo-${x + 1}.jpg`,
    original: `https://blito-app.s3.amazonaws.com/media/dojo-${x + 1}.jpg`
  })),
  ...[...Array(10)].map((v_, x) => ({
    projectId: 'id3',
    src: `https://blito-app.s3.amazonaws.com/media/la-muchacha-${x + 1}.jpg`,
    original: `https://blito-app.s3.amazonaws.com/media/la-muchacha-${
      x + 1
    }.jpg`
  })),
  ...[...Array(1)].map((v_, x) => ({
    projectId: 'id4',
    src: `https://blito-app.s3.amazonaws.com/media/sabor-latino-${x + 1}.jpg`,
    original: `https://blito-app.s3.amazonaws.com/media/sabor-latino-${
      x + 1
    }.jpg`
  })),
  ...[...Array(1)].map((v_, x) => ({
    projectId: 'id5',
    src: `https://blito-app.s3.amazonaws.com/media/unstoppable-${x + 1}.jpg`,
    original: `https://blito-app.s3.amazonaws.com/media/unstoppable-${
      x + 1
    }.jpg`
  }))
]
