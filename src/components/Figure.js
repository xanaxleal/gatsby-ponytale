import React from "react"

const Figure = (props) => (
    <figure className="demo-1__gallery__figure">
        <img className="demo-1__gallery__image" src={props.image}/>
        <figcaption>{props.title}</figcaption>
    </figure>
)

export default Figure;

