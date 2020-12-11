import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrganizations } from './redux/actions';
import './App.scss';

const App = () => {

  const dispatch = useDispatch();

  const organizations = useSelector(state => state);

  const getData = () => {
    fetch('https://api.pipedrive.com/v1/organizations?start=0&api_token=c8174fcc1e98536f0a995bdbe5a9005ad4ef33cb')
      .then(response => response.json())
      .then(obj => dispatch(setOrganizations(obj.data)))
      .catch(err => console.log(err))
  }

  const renderedListItems = organizations.map(organization => {
    return <li key={organization.id}>{organization.name}</li>
  })

  return (
    <div className="App">
      <button onClick={getData}>Show companies</button>
      <ul>{renderedListItems}</ul>
    </div>
  );
}

export default App;
