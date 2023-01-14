

function Read(props) {

    return(
        <div id="innerBottomDiv">
            <label>
                <p id="to-secondary">Get all</p>
                <button 
                    id="button-action" 
                    onClick={props.onActiveChange} 
                    value="getall"
                >SUBMIT</button>
            </label>

            <label>
                <p id="to-secondary">Search by ID:</p>
                <input 
                    id="leftInput" 
                    onChange={props.onIdChange} 
                    value={props.id} 
                /><p />
                <button 
                    id="button-action" 
                    onClick={props.onActiveChange} 
                    value="getbyid"
                >SUBMIT</button>
            </label>
            
            <label>
                <p id="to-secondary">Search by availability:</p>
                <input 
                    type="radio" 
                    onChange={props.onAvailChange} 
                    name="avail" 
                    value="true" 
                    defaultChecked 
                />
                <em id="to-secondary">true</em>
                <input 
                    type="radio" 
                    onChange={props.onAvailChange} 
                    name="avail" 
                    value="false" 
                />
                <em id="to-secondary">false</em><p />
                <button 
                    id="button-action" 
                    onClick={props.onActiveChange} 
                    value="getbyavail"
                >SUBMIT</button>
            </label>
        </div>
        
    )
}

export default Read