import { useState } from "react";
import Block from "./Block";
import "./App.css";
import Axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Loginuser from "./login";
import user from "./img/user.png"
import po from "./img/po.png"
import sudoku from "./img/sudoku.png"
import tic from "./img/tic.png"
import Stonegame from "./Stonegame";
function App() {
    const history = useHistory()
 
    const authdata2 = () => {

        Axios.get("https://gamedatabackend.herokuapp.com/auth", {
            headers: {
                "access-token": localStorage.getItem("access-token")
            }
        }).then((response) => {
            if (response.status === 200) {
                history.push("/sudo")
            }
            else {
                history.push("/")
                alert("user is not authenticated")


            }
        }).catch((err) => history.push("/"))


    }
    const authdata3 = () => {

        Axios.get("https://gamedatabackend.herokuapp.com/auth", {
            headers: {
                "access-token": localStorage.getItem("access-token")
            }
        }).then((response) => {
            if (response.status === 200) {
                history.push("/stonegame")
            }
            else {
                history.push("/")
                alert("user is not authenticated")


            }
        }).catch((err) => history.push("/"))


    }

   

    function logout() {
            alert("logout")
            localStorage.removeItem("access-token")
            history.push("/")
        }
        return (
            <>
                <div className="links">
                
                    <Link to="/" />
                    <Link to="/sudo" />
                    <Link to="/stonegame" />

                  
                
                    
                    
                
               
                    <button  style={{backgroundColor:"transparent",border:"0px"}} onClick={authdata2} ><img className="img" src={tic} /></button><br />
                    <button style={{backgroundColor:"transparent",border:"0px"}}  onClick={logout}><img className="img" src={po} /></button><br />
                    <button style={{backgroundColor:"transparent",border:"0px"}}  onClick={authdata3}><img className="img" src={sudoku} /></button>
                </div>
                <Switch>
               
                    <Route exact path="/">
                        <Loginuser />
                    </Route>
                    <Route exact path="/sudo">
                        <TicTacToe />
                    </Route>
                    <Route exact path="/stonegame">
                        <Stonegame />
                    </Route>
                </Switch>
            </>
        )
    }
    export default App;





    function Home() {
        return (
            <>
                <h1>anuj</h1>
            </>
        )
    }










    let TicTacToe = () => {
        const [GameOver, setGameOver] = useState(false);
        const [Grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
        const [currPlayer, setcurrPlayer] = useState("X");
        const [Status, setStatus] = useState("Turn : Player X");
        let i = -1;
        return (
            <div className='TicTacToeBody'>
                <div className="StatusBar">{Status}</div>
                <div className="TicTacToecontainer">
                    {
                        Grid.map(() => {
                            i++;
                            return (
                                <Block Grid={Grid} Key={i} setGrid={setGrid} currPlayer={currPlayer} setcurrPlayer={setcurrPlayer} setStatus={setStatus} GameOver={GameOver} setGameOver={setGameOver} />
                            )
                        })
                    }
                </div>
                <div className="Reset">
                    <button onClick={() => {
                        let blocks = document.querySelectorAll('.TicTacToeblock');
                        for (let i = 0; i < blocks.length; i++)blocks[i].style.color = 'white'
                        setGrid(["", "", "", "", "", "", "", "", ""]);
                        setGameOver(false);
                        setcurrPlayer("X");
                        setStatus("Turn : Player X");
                    }}>Reset</button>

                </div>
            </div>
        )
    }
