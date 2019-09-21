import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

function SearchBar (props) {
  return (
  <div>
  <Input
    value={props.searchTerm}
    onChange={(e) => props.updateSearchTerm(e.target.value)}
    icon={<Icon name='search' inverted circular link onClick={props.ytSearch}/>}
    placeholder='Search...'
  />
      <div>
          <form method="POST" action="/api/song">
          <input name="name" type="text" />
          <input name="artist" type="text" />
          <input name="URL" type="text" />
          <input type="submit" />
          </form>
        </div>
    </div>
  )};

export default SearchBar;