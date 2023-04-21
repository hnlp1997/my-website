import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { GridGallery } from 'react-grid-gallery'

const GalleryPage = () => {
  const images = [
    {
      src: '/images/gallery/1.jpeg',
      thumbnail: '/images/gallery/1.jpeg',
      caption: 'Image 1',
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: '/images/gallery/2.jpeg',
      thumbnail: '/images/gallery/2.jpeg',
      caption: 'Image 2',
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: '/images/gallery/3.jpeg',
      thumbnail: '/images/gallery/3.jpeg',
      caption: 'Image 3',
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }
  ]

}

export default GalleryPage
