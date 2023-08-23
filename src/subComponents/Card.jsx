import React from 'react'

const Card = (props) => {
  return (
    <section className="cards">
        <article className="cards__card">
            <div className="cards__card-circle">{props.circle}</div>
            <img className="cards__card-img" src={props.img} alt="img 1" />
            <div className="cards__card-container-text">
            <h3 className="cards__card-title">{props.title + ''}<span>Starburks</span></h3>
            <p className="cards__card-description">{props.description}</p>
            <button className="cards__card-btn">{props.textContentBtn}</button>
            </div>
        </article>
        {props.estado ? <div className="cards__card-circle">{props.circle}</div> : null}
    </section>
  )
}

export default Card