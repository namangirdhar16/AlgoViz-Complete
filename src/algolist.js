import React from "react";

//import "./bootstrap.min.css";
import "./App.css";
import { NavLink } from "react-router-dom";
export default  function Algolist()
{
  return (
  <div className='container mt-20'>
        <br />
        <br />
        <table className='ui selectable inverted violet table center'>
          <thead>
            <tr>
              <th>Algorithm Category</th>
              <th className='right aligned'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Linear Search</td>
              <td className='right aligned'>
                <NavLink to='/searching'>
                  <code>/Linear Search</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Binary Search</td>

              <td className='right aligned'>
                <NavLink to='/searching'>
                  <code>/Binary Search</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>mores</td>

              <td className='right aligned'>
              
                  <p>coming soon</p>
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};