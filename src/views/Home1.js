import { Link } from "react-router-dom";
import home from '../images/Home.png';
import library from '../images/library.png';
import search from '../images/Search.png';
import downArrow from '../images/downArrow.png';
import a1 from '../images/albums/1.PNG';
import a2 from '../images/albums/2.PNG';
import a3 from '../images/albums/3.PNG';
import a4 from '../images/albums/4.PNG';
import a5 from '../images/albums/5.PNG';
import a6 from '../images/albums/6.PNG';
import a7 from '../images/albums/7.PNG';
import a8 from '../images/albums/8.PNG';
import a9 from '../images/albums/9.PNG';
import a10 from '../images/albums/10.PNG';
import a11 from '../images/albums/11.PNG';

import '../App.css';

function Home1() {
    return (
            <div>
                <meta charSet="utf-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=DM Sans" rel="stylesheet" />
                <title>Capstone</title>
                <div className="sidebar">
                    <h1 className="Spotify_logo" />
                    <div className="nav_button_container">
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="home">
                                    <span className="img">
                                      <img  src={home} className="home" alt="home" />
                                    </span>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/search">
                                    <span className="img">
                                        <img  src={search} className="search" alt="search" />
                                    </span>
                                    <span>Search</span>

                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/library">
                                    <span className="img">
                                        <img  src={library} className="library" alt="library" />
                                    </span>
                                    <span>Your Library</span>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <div className="header">
                        <div className="buttons">
                            <button type="button" className="fa-solid fa-chevron-left" />
                            <button type="button" className="fa-solid fa-chevron-right" />
                        </div>
                        <div className="searchBar">
                            <form className="search">
                                <input type="text" placeholder="What do you want to listen to?" />
                            </form>
                        </div>
                        <div className="dropdown">
                            <button className="dropdownBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Raquel
                                <img  src={downArrow} className="downArrow" alt="DownArrow" />

                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="spotify-react/src/views/Home1#">Account</a></li>
                                <li><a className="dropdown-item" href="spotify-react/src/views/Home1#">Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="playlists">
                        <h2>The state of music today</h2>
                        <div className="playlists-list">
                            <div className="playlists-item">
                                <img  src={a1} className="1" alt="1" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Today's Tops Hits</h4>
                                <p>Sam Smith is on top of the Hottest 50!</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a2} className="2" alt="2" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Hot Hits USA</h4>
                                <p>The hottest tracks in the United States...</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a3} className="3" alt="3" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Viral Hits</h4>
                                <p>Viral, trending and taking off.</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a4} className="4" alt="4" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>RapCaviar</h4>
                                <p>Music from Metro Boomin, DaBaby and Rae...</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a5} className="5" alt="5" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Rock This</h4>
                                <p>Fall Out Boy along with the biggest Rock songs you...</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a6} className="6" alt="6" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Are &amp; Be</h4>
                                <p>The pulse of R&amp;B music today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="playlists">
                        <h2>Studying</h2>
                        <div className="playlists-list">
                            <div className="playlists-item">
                                <img  src={a7} className="7" alt="7" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Instrumental Study</h4>
                                <p>By Spotify</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a8} className="8" alt="8" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Study Vibes</h4>
                                <p>By Lofi Girl</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a9} className="9" alt="9" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Study Music 2023</h4>
                                <p>By Naeleck</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a10} className="10" alt="10" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Studying Mix</h4>
                                <p>By Spotify</p>
                            </div>
                            <div className="playlists-item">
                                <img  src={a11} className="11" alt="11" />
                                <div className="play">
                                    <span className="playBtn fa-solid fa-play"> </span>
                                </div>
                                <h4>Study Mode</h4>
                                <p>By Spotify</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }


export default Home1;