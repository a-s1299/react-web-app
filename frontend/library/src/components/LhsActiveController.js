import Create from './operations/Create';
import Read from './operations/Read';
import Update from './operations/Update';
import Delete from './operations/Delete';



function LhsActiveController(props) {

    switch (props.operation) {
        case 'create':
            return (
                <Create 
                    onActiveChange={props.onActiveChange} 
                    onIdChange={props.onIdChange} 
                    id={props.id} 
                />
            )
        case 'read':
            return (
                <Read 
                    onActiveChange={props.onActiveChange} 
                    onIdChange={props.onIdChange} 
                    onAvailChange={props.onAvailChange} 
                    id={props.id} 
                />
            )
        case 'update':
            return (
                <Update 
                    onActiveChange={props.onActiveChange} 
                    onIdChange={props.onIdChange} 
                    id={props.id} 
                />
            )
        case 'delete':
            return (
                <Delete 
                    onActiveChange={props.onActiveChange} 
                    onIdChange={props.onIdChange} 
                    id={props.id} 
                />
            )

        default:
            return (
                <p id="to-secondary">Please select a CRUD operation above.</p>
            )
    }
}

export default LhsActiveController