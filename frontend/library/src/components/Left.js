import InnerTop from './InnerTop';
import InnerBottom from './InnerBottom';
import { useState } from 'react';

function Left(props) {

    const [operation, setOperation] = useState('empty');

    function handleOperationChange(event) {
        setOperation(event.target.value);
    }

    return(
        <div className="card" id="split-width" >
            <InnerTop 
                onOperationChange={handleOperationChange} 
            />
            <InnerBottom 
                onActiveChange={props.onActiveChange} 
                onIdChange={props.onIdChange} 
                onAvailChange={props.onAvailChange} 
                operation={operation} 
                id={props.id} 
            />
        </div>
    )
}

export default Left