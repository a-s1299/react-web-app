

function GetAll(props) {

    return (
        <div>
            <p>Listing all books:</p>
            <ul>
                {props.data.map(x => <li key={props.data.id}>id: <b>{x.id}</b>, <i>{x.title}</i></li>)}
            </ul>
        </div>
        
    )
}

export default GetAll