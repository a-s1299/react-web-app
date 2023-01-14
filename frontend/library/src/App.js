import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Left from './components/Left';
import Right from './components/Right';
import { useState, useEffect } from 'react';


function App() {

    const API_URL = "http://127.0.0.1:3001"; // server set to run on port 3001

    const [active, setActive] = useState('empty');
    const [activeCopy, setActiveCopy] = useState('empty');
    const [id, setId] = useState('1');
    const [idCopy, setIdCopy] = useState('1');
    const [avail, setAvail] = useState('true');
    const [data, setData] = useState([]);
    const [body, setBody] = useState({});
    const [theme, setTheme] = useState('empty');

    useEffect(() => {
        let doCall = true;
        let callDetails;

        try {
            callDetails = handleApi(active, idCopy, avail, API_URL, body);
        } catch (e) {
            doCall = false;
            console.log(e);
        }

        if (doCall) {
            fetch(
                callDetails[0],
                callDetails[1]
            ).then( 
                response => {
                    if (!response.ok) {
                        throw new Error(`{$response.status}`);
                    }
                    return response.json()
                }
            ).then(
                responseData => {
                    setData(responseData);
                }                
            ).catch(
                error => {
                    console.log(error.message);
                }
            );
            setActive('empty'); //here to inner success
        }

    }, [active]);
    

    function handleActiveChange(event) {
        setActive(event.target.value);
        setActiveCopy(event.target.value);
        setIdCopy(id);
    }
    
    function handleIdChange(event) {
        setId(event.target.value);
    }
    
    function handleAvailChange(event) {
        setAvail(event.target.value);
    }

    function handleThemeChange(event) {
        setTheme(event.target.value);

        switch (event.target.value) {
            case 'twist':
                document.documentElement.style.setProperty('--primary-color', 'rgb(233, 233, 233)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(66, 69, 78)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(228, 156, 0)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(102, 130, 172)');
                break;
            case 'bingsu':
                document.documentElement.style.setProperty('--primary-color', 'rgb(122, 65, 89)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(216, 193, 191)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(254, 255, 255)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(165, 141, 144)');
                break;
            case 'carbon':
                document.documentElement.style.setProperty('--primary-color', 'rgb(199, 93, 23)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(51, 54, 51)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(224, 235, 195)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(70, 77, 64)');
                break;
            case 'bento':
                document.documentElement.style.setProperty('--primary-color', 'rgb(202, 112, 135)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(51, 68, 83)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(255, 255, 255)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(35, 46, 58)');
                break;
            case 'laser':
                document.documentElement.style.setProperty('--primary-color', 'rgb(196, 75, 105)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(39, 32, 77)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(248, 236, 255)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(48, 154, 158)');
                break;
            default:
                document.documentElement.style.setProperty('--primary-color', 'rgb(233, 233, 233)');
                document.documentElement.style.setProperty('--secondary-color', 'rgb(66, 69, 78)');
                document.documentElement.style.setProperty('--tertiary-color', 'rgb(228, 156, 0)');
                document.documentElement.style.setProperty('--quaternary-color', 'rgb(102, 130, 172)');
    
        }
    }

    function handleApi(action, id, avail, URL, payload) {
        let callDetails = [];
    
        switch (action) {
            case 'getall':
                callDetails.push(`${URL}/books`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'default'
                 });
                 break;
            case 'getbyid':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'reload'
                 });
                 break;
            case 'getbyavail':
                callDetails.push(`${URL}/books?avail=${avail}`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'default'
                 }); 
                 break;
            case 'checkaddnew':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'reload'
                 });
                 break;
            case 'checkupdate':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'reload'
                 });
                 break;
            case 'checkdelete':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'reload'
                 });
                 break;
            case 'addnew':
                callDetails.push(`${URL}/books`);
                callDetails.push( {
                    method: "POST",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( payload )
                 });
                 break;
            case 'update':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "PUT",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( payload ),
                    cache: 'reload'
                 });
                 break;
            case 'delete':
                callDetails.push(`${URL}/books/${id}`);
                callDetails.push( {
                    method: "DELETE",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'default'
                 });
                 break;
            default:
                throw new Error("default 'active' case in handleApi()");
        }
        return callDetails;
    }


    return (

        <div className="App">
            <div className="top">
                <Top name="Library Portal on the Line" />
            </div>
            <div className="content">
                <Left 
                    onActiveChange={handleActiveChange} 
                    onIdChange={handleIdChange} 
                    onAvailChange={handleAvailChange} 
                    id={id} 
                />
                <Right 
                    active={activeCopy}
                    data={data}
                    id={idCopy} 
                    avail={avail}
                    doHandleActiveChange={handleActiveChange}
                    doSetBody={setBody} 
                    doSetActive={setActiveCopy}
                />
            </div>
            <div className="bottom">
                <Bottom name="All your base are belong to us" onThemeChange={handleThemeChange} /> 
            </div>
        </div>
    );
}

export default App;