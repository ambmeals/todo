import React from 'react'

//we pass props into this component to allow Resources.js to inform what will be dispalyed in each instance of the SingleResource component.
export default function SingleResource(props) {
    return (
        <div className="singleResource col-md-5 m-4">
            <h3>{props.resource.Name}</h3>
            {props.resource.Description !== null ? <p>
                {props.resource.Description} </p> :
                <p>No Description Provided</p>
           
            }

            <a href={props.resource.Url} target="_blank" rel="noreferrer" className="btn btn-info">
                Visit {props.resource.LinkText}
            </a>

        </div>
    )
}
