import { FC } from "react";
import Title from '../../components/templates/Title';
import { storage } from "../../lib/firebase/firebase";
import { useState, useEffect } from "react";
import { Box, Drawer as LinearProgress, Typography } from "@mui/material";

export const ImageNewPage: FC = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(100);

  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
    setError("");
  };

  const submit = (event) => {
    event.preventDefault();
    if (image === "") {
      setError("ファイルが選択されていません");
      return;
    }
  }

  return (
    <div>
      <Title>画像新規作成ページ</Title>
      <div>
          {/* 画像アップロード用のフォーム */}
          <form onSubmit={submit}>
            <input type="file" onChange={handleImage} />
            <button onClick={submit}>アップロード</button>
          </form>
      </div>
      {progress !== 100 && <LinearProgressWithLabel value={progress} />}
      {error}
      {imageUrl && (
        <div>
          <img width="400px" src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}