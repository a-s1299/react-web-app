

function Delete(props) {

    let match;

    try {
        match = (props.data[0].id === props.id);
    } catch (e) {
        match = false;
    }

    if (match) {
        return (
            <div>
                <p>Please double check your entry for deletion. <b><em>This cannot be undone.</em></b></p>
                <ul>
                    {props.data.map(x => 
                        <div>
                            <li key='id'>ID: {x.id}</li>
                            <li key='title'>Title: <i>{x.title}</i></li>
                            <li key='auth'>Author: {x.author}</li>
                            <li key='pub'>Publisher: {x.publisher}</li>
                            <li key='num'>ISBN: {x.isbn}</li>
                            <li key='avail'>Available: {x.avail}</li>
                            <li key='who'>Checked out by: {x.who}</li>
                            <li key='due'>Due date: {x.due}</li>
                        </div>
                    )}
                </ul>
                <button id="button-action-alt" onClick={props.doHandleActiveChange} value="delete" >DELETE</button>
            </div>
            
        )
    }  else {
        return(
            <div>
                <p><code><b>ERROR</b> This ID seems to not exist. Please double check your entry.</code></p>
            </div>
        )
    }
}

export default Delete