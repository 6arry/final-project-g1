import React from 'react';
// import './App.css';

function Logout() {
  var element = document.getElementById("body");
  element.className="logout";
  return (
    <div>
      <h1 className="things">This is the Logout page!</h1>
    </div>
  );
}

export default Logout;
