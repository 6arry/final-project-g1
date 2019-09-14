import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

function SearchBar (props) {
  console.log(props)
  return <Input
    value={props.searchTerm}
    icon={<Icon name='search' inverted circular link onClick={() => alert('WE ARE DOING STUFF!')}/>}
    placeholder='Search...'
  />
}

export default SearchBar;