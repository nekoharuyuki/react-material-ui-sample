import { useState } from "react";
import { auth } from "../../../lib/firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Title from '../../../components/templates/Title';
import Button from '@mui/material/Button';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(( userCredential) => {
      console.log('user created');
      console.log(userCredential)
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    }); 
    console.log(email.value);
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <Title>ユーザ登録</Title>
      <div>
        <label>メールアドレス</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={(event) => handleChangeEmail(event)}
        />
      </div>
      <div>
        <label>パスワード</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(event) => handleChangePassword(event)}
        />
      </div>
        <hr />
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          登録
        </Button>
      </div>
    </div>
  );
};
