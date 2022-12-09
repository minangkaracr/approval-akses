import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logo from './images/logo-midi-akses.png';
import './App.css';
import background from './images/img-bg.png';


const Homepage = () => {
    const [dataAkses, setdataAkses] = useState([]);
    const [keyWord, setkeyWord] = useState("");

    useEffect (()=> {
        axios.get('http://10.4.20.82:8080/api/approval_akses', {
            'Access-Control-Allow-Origin' : true,
        },
        )
        .then(result =>{
            // console.log('Data Akses', result.data);
            const dataAksesAPI = result.data;
            setdataAkses(dataAksesAPI);
        })
        .catch(err=>{
            console.log('error: ', err);
        })
    },[])

    return (
        <div className="container">
            <img src={background} alt="logo" class="logo-1"/>
            <br></br>
            <div className="row justify-content-center text-center">
                <div className="col-2">
                    <a href="/">
                        <img src={Logo} alt="logo" class="logo"/>
                    </a>
                </div>
                <div className="col-4">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pencarian..."
                            value={keyWord}
                            onChange={event => setkeyWord(event.target.value)}
                        />
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
                <div className="row justify-content-center" align="center">
                    <div className="col-xs col-md-10 col-lg-10"> 
                        <div className="row">
                            {dataAkses.filter(post => {
                                if (keyWord === '') {
                                return post;
                                } else if (post.ket.toLowerCase().includes(keyWord.toLowerCase())) {
                                return post;
                                }
                            }).map((data_akses, ket)=>{
                                return (
                                <div className="col-4 col-sm-4 col-md-3 col-lg-2 font-link">
                                    <br></br>
                                        <a href={data_akses.url} rel="nofollow" key={ket} class="logo-akses-point">
                                            <div>
                                                <img src={require('./images/'+data_akses.nama_gambar)} alt="logo-akses" class="logo-akses" />
                                            </div>
                                            <div className='desc'>
                                                {data_akses.ket}
                                            </div>
                                        </a>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>         
    )
}

export default Homepage;