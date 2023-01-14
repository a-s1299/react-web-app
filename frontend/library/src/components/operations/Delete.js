

function Delete(props) {
    return(
        <label>
            <p id="to-secondary">Please enter ID:</p>
            <input 
                id="leftInput" 
                onChange={props.onIdChange} 
                value={props.id} 
            /><p />
            <button 
                id="button-action" 
                onClick={props.onActiveChange} 
                value="checkdelete"
            >SUBMIT</button>
        </label>
    )
}

export default Delete