import React from "react";
import {NavLink} from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={};
  }
  render()
  {
    return (
      < table >
        <thead>
          <tr>
          <th>Algorithms</th>
          <th>link</th>
         </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                searching
                </td>
                <NavLink to="/searching">
                  <code>searching</code>
                  </NavLink>
                  <td>
                    </td>
              </tr>
            </tbody>
            </ table>

    );
  }
}