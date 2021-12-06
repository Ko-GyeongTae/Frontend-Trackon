
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from '../components/Location';

const baseURL = 'http://220.90.237.33:7799'; // Server ip + port
const cookies = new Cookies();

function Home() {
    const [position, setPosition] = useState([]);
    const logout = () => { // Logout function
        cookies.remove("accessToken"); // Remove accesstoken from browser cookie storage
        window.location.reload(false); // Reload page
    }

    async function getReport() { // Get Report list
        await axios.get(baseURL + "/report", {
            headers: {
                Authorization: cookies.get("accessToken") // Get accesstoken from browser cookie
            }
        })
            .then(res => {
                setPosition(res.data); // Save report list in state
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function deleteReport(arg) { // Delete report function
        await axios.delete(baseURL + "/report/" + arg, {
            headers: {
                Authorization: cookies.get("accessToken") // Get accesstoken from browser cookie
            }
        })
            .then(res => {
                console.log(res.status);
            })
            .catch(err => {
                console.log(err);
            })
        window.location.reload(false); // Reload screen
    }

    useEffect(() => {
        getReport(); 
    }, []);
    return (
        <>
            <div class="pusher">
                <div class="ui inverted vertical masthead center aligned segment">

                    <div class="ui container">
                        <div class="ui large secondary inverted pointing menu">
                            <a href="/" class="active item">Home</a>
                            <div class="right item">
                                <button class="ui inverted button" onClick={logout}>LogOut</button>
                            </div>
                        </div>
                    </div>

                    <div class="ui text container" style={{ marginBottom: 30 }}>
                        <h1 class="ui inverted header">
                            Track On
                        </h1>
                        <h2>You can track your Arduino</h2>
                    </div>
                    <Location position={position} />
                </div>
                {position.map(p => (
                    <div key={p.id} style={{ textAlign: 'center', backgroundColor: '#f1f1f1', margin: 10, padding: 10 }} onClick={() => window.confirm("삭제하시겠습니까") ? deleteReport(p.reportId) : null}>
                        <h1 key={p.id}>{p.name}</h1>
                        <p key={p.id}>{p.message}</p>
                        <h2 key={p.id}>{p.reportType}</h2>
                        <p key={p.id}>{p.reportAt}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
