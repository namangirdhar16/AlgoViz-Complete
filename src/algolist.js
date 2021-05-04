
import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
export default class Algolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container mt-20'>
        <br />
        <br />
        <table className='ui selectable inverted violet table'>
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
              <td>Sorting Algorithms</td>
              <td className='right aligned'>
                <NavLink to='/sorting'>
                  <code>/Sorting</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Path Finder</td>
              <td className='right aligned'>
                <NavLink to='/pathfinder'>
                  <code>/PathFinder</code>
                </NavLink>
              </td>
            </tr>
            <br />
          </tbody>
        </table>
      </div>
    );
  }
}

