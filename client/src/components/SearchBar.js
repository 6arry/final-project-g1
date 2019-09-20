import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

function SearchBar (props) {
  return <Input
    value={props.searchTerm}
    onChange={(e) => props.updateSearchTerm(e.target.value)}
    icon={<Icon name='search' inverted circular link onClick={props.ytSearch}/>}
    placeholder='Search...'
  />
}

export default SearchBar;