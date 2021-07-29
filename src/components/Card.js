import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  
    return (
        <article className = "element" id = {props.card._id}>
          <img id = "element-image" className = "element__image" src ={props.card.link} alt = {props.name} onClick={handleClick}/>
          <div className = "element__footer">
            <h2 className = "element__paragraph" >{props.card.name}</h2>
            <button type = "button" className = "element__like-button"></button>
          </div>
          <p className = "element__like-counter">{props.card.likes.length}</p>
          <button type = "button" className = "element__delete-button"></button>
        </article>
    )
}
export default Card;