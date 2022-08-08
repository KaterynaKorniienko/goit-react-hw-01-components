import React from "react";

import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import TransactionHistory from "./components/TransactionHistory";

import friends from "./data/friends.json";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import transactions from "./data/transactions.json";

import "./css/App.css"

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
      
    </div>
  );
}

export default App;
