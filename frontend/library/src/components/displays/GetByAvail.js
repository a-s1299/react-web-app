

function GetByAvail(props) {
    
    return (
        <div>
            <p>Listing books with selected availability:</p>
            <ul>
                {props.data.map(x => <li key={props.data.id}>id:{x.id}, <i>{x.title}</i></li>)}
            </ul>
        </div>
        
        
    )
}

export default GetByAvail