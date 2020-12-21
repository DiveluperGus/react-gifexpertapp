import React from 'react'

export const GifGridItem = (props) => {
    console.log(props);
    const {title, url} = props;

    return (
        <div className="card animate__flash animate__fadeIn animate__pulse">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
