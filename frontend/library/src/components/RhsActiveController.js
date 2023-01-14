import GetAll from './displays/GetAll';
import GetById from './displays/GetById';
import GetByAvail from './displays/GetByAvail';
import AddNew from './displays/AddNew';
import Update from './displays/Update';
import Delete from './displays/Delete';


function RhsActiveController(props) {

    switch (props.active) {
        case 'getall':
            return (
                <GetAll 
                    data={props.data} 
                />
            )
        case 'getbyid':
            return (
                <GetById 
                    data={props.data} 
                    id={props.id} 
                />
            )
        case 'getbyavail':
            return (
                <GetByAvail 
                    data={props.data} 
                    avail={props.avail} 
                />
            )
        case 'checkaddnew':
            return (
                <AddNew 
                    data={props.data} 
                    id={props.id}
                    doHandleActiveChange={props.doHandleActiveChange} 
                    doSetBody={props.doSetBody} 
                    doSetActive={props.doSetActive}
                />
            )
        case 'checkupdate':
            return (
                <Update 
                    data={props.data} 
                    id={props.id}
                    doHandleActiveChange={props.doHandleActiveChange} 
                    doSetBody={props.doSetBody} 
                    doSetActive={props.doSetActive}
                />
            )
        case 'checkdelete':
            return (
                <Delete 
                    data={props.data} 
                    id={props.id}
                    doHandleActiveChange={props.doHandleActiveChange}
                />
            )
        default:
            return (
                <p>Welcome to the interactive library system.</p>
            )
    }
}

export default RhsActiveController