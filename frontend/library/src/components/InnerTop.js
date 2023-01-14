

function InnerTop(props) {
    return (
        <div className="card" id="inner" > 
            <button id="button-nav" onClick={props.onOperationChange} value="create">CREATE</button>
            <button id="button-nav" onClick={props.onOperationChange} value="read">READ</button>
            <button id="button-nav" onClick={props.onOperationChange} value="update">UPDATE</button>
            <button id="button-nav" onClick={props.onOperationChange} value="delete">DELETE</button>

        </div>
    )
}

export default InnerTop