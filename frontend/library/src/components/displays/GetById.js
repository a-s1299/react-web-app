

function GetById(props) {

    let match;

    try {
        match = (props.data[0].id === props.id);
    } catch (e) {
        match = false;
    }

    if (match) {
        return (
            <div>
                <p>Listing book with ID: <b>{props.id}</b></p>
                <ul>
                    {props.data.map(x => 
                        <div>
                            <li key='title'>Title: <i>{x.title}</i></li>
                            <li key='auth'>Author: {x.author}</li>
                            <li key='pub'>Publisher: {x.publisher}</li>
                            <li key='num'>ISBN: {x.isbn}</li>
                            <li key='avail'>Available: {x.avail}</li>
                            <li key='who'>Who: {x.who}</li>
                            <li key='due'>Due: {x.due}</li>
                        </div>
                    )}
                </ul>
            </div>
            
        )
    }  else {
        return(
            <div>
                <p><code><b>ERROR</b>: This ID does not seem to exist.</code></p>
            </div>
        )
    }
}

export default GetById