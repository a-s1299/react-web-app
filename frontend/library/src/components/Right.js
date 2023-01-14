import RhsActiveController from './RhsActiveController'

function Right(props) {

    return(
        <div className="card" id="split-width" >
            <RhsActiveController 
                active={props.active} 
                data={props.data} 
                id={props.id} 
                avail={props.avail} 
                doHandleActiveChange={props.doHandleActiveChange} 
                doSetBody={props.doSetBody} 
                doSetActive={props.doSetActive}
            />
        </div>
        
    )
}

export default Right