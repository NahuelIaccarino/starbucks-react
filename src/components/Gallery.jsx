import React from 'react'
import GALLERY_1 from '../images/gallery-1.avif'
import GALLERY_2 from '../images/frappuccinos.jpg'
import GALLERY_3 from '../images/SLEILATMFJDOJMZC5XUY42IIB4.avif'

const Gallery = () => {
  return (
    <section className="galeria">
        <img className="galeria__img" src={GALLERY_1} alt="galeria 1" />
        <img className="galeria__img" src={GALLERY_2} alt="galeria 2" />
        <img className="galeria__img" src={GALLERY_3} alt="galeria 3" />
    </section>
  )
}

export default Gallery