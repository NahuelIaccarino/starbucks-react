import React from 'react'
import CARDS_1 from '../images/card-1.jpg'
import CARDS_2 from '../images/card-2.webp'
import CARDS_3 from '../images/card-3.webp'
import CARDS_4 from '../images/card-4.jfif'

const Cards = () => {
  return (
    <section className="cards">
        <Card img={CARDS_1} 
              estado={true} 
              textContentBtn={'btn-1'} 
              circle={'5%'} 
              title={'Aplicacion de'} 
              description={'Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedidotan facil.'} 
        />
        <Card img={CARDS_2} 
              estado={true} 
              textContentBtn={'btn-2'} 
              circle={'5%'} title={'Delivery'} 
              description={'Starbucks entrega su comida y bebida favorita en la puerta de su casa.'} 
        />
        <Card img={CARDS_3} 
              estado={false} 
              textContentBtn={'btn-3'} 
              circle={'5%'} title={'Novedades'} 
              description={'Mantengase informado de nuestras ultimas novedades y actualizaciones.'} 
        />
        <Card img={CARDS_4} 
              estado={false} 
              textContentBtn={'btn-4'} 
              circle={'5%'} title={'Historias de'} 
              description={'Descubra nuestra empresa y nuestra historia.'} 
        />
    </section>
  );
};

export default Cards