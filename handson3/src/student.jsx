import { useState } from 'react';

function Student() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = () => {
    if(username && password) setMsg("Login Successful");
    else setMsg("Please enter username and password");
  }

  return (
    <div>
      Username: <input value={username} onChange={e=>setUsername(e.target.value)} /> <br/><br/>
      Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /> <br/><br/>
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  )
}
export default Student;