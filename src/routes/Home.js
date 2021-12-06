
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from '../components/Location';

const baseURL = 'http://220.90.237.33:7799'; // Server ip + port
const cookies = new Cookies();

function Home() {
    const [position, setPosition] = useState([]);
    const logout = () => {
        cookies.remove("accessToken");
        window.location.reload(false);
    }

    async function getReport() {
        console.log('request');
        await axios.get(baseURL + "/report", {
            headers: {
                Authorization: cookies.get("accessToken")
            }
        })
            .then(res => {
                console.log(res.data);
                setPosition(res.data);
            })
            .catch(err => {
                console.log(err);
            })
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
                    <Location position={position}/>
                </div>
                {position.map(p => (
                    <div key={p.id}>
                        <h1 key={p.id}>{p.name}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
