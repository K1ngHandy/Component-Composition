import React, { useState } from "react";
import Heading from "./components/Heading";
import UserInfo from "./components/UserInfo";

export default function App() {
  const [user, setUser] = useState({ name: "Hubert", age: 27 })

  return (
    <div>
      <Heading />
      <UserInfo user={user} />
    </div>
  )
}