
import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import "./index.css"
import Axios from "axios"

import { useState } from "react"

export function List() {
    const [data, setdata] = useState([])
    const getData = () => {
  
      try {
        Axios.get("http://localhost:3009/getFromtrip", {
          headers: {
            "access-token": localStorage.getItem("access-token")
          }
        }).then((response) => {
          if (response.status == 200) {
            console.log(response)
            setdata(response.data)
          }
          else {
            // history.push("/")
            alert("user is not authenticated")
  
  
          }
        })
      } catch (err) {
        console.log(err)
      }
  
    }
  
  
    useEffect(() => {
      getData()
    }, [])
    return (
      <>
        <h1 className='add_heading'>All Trips</h1>
        <tr>
          <th>Date</th>
          <th>Place</th>
          <th>Type</th>
        </tr>
        {data.map((info) =>
        (
          <div key={info._id}>
            <table>
  
              <tr>
                <td style={{
                  margin:"90px"
                }}>
                  {info.date}
                </td>
                <td>
                  {info.place}
                </td>
                <td>
                  {info.type}
                </td>
              </tr>
            </table>
          </div>
        ))}
      </>
    )
  }
  