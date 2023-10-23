import { useState } from "react";
import { auth } from "../../../lib/firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Title from '../../../components/templates/Title';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="メールアドレス"
            label="メールアドレス"
            variant="outlined" 
            onChange={(event) => handleChangeEmail(event)}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="パスワード"
            placeholder="パスワード"
            variant="outlined"
            onChange={(event) => handleChangePassword(event)}
          />
        </Box>
        <ul>
          <li>パスワードに使用できる文字は、半角の英字すべて・半角の数字すべて・半角の記号の一部です。</li>
          <li>パスワードには、英大文字・英小文字・数字それぞれを最低1文字ずつ含む必要があります。</li>
          <li>パスワードの長さは、半角8文字以上から半角50文字以下です。</li>
          <li>変更前のパスワードと同じパスワードは設定できません。</li>
        </ul>
        <hr />
      <div>
        <Button variant="contained" onClick={handleSubmit}>
          登録
        </Button>
      </div>
    </div>
  );
};
