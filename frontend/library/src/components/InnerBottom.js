import LhsActiveController from './LhsActiveController'

function InnerBottom(props) {
    return (
        <div className="card" id="inner"> 
            <LhsActiveController 
                onActiveChange={props.onActiveChange} 
                onIdChange={props.onIdChange} 
                onAvailChange={props.onAvailChange} 
                operation={props.operation} 
                id={props.id} 
            />
        </div>
    )
}

export default InnerBottom