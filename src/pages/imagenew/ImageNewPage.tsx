import { FC } from "react";
import Title from '../../components/templates/Title';
import { storage } from "../../lib/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { validateImage } from "image-validator";

export const ImageNewPage: FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(100);
  const [file, setFile] = useState<File>(null!);

  // ファイルのバリデーション関数
  const validateFile = async (file: File) => {
    // 3GBを最大のファイルサイズに設定
    const limitFileSize = 3 * 1024 * 1024;
    if (file.size > limitFileSize) {
      setError("ファイルサイズが大きすぎます。\n3メガバイト以下にしてください。");
      return false;
    }
    const isValidImage = await validateImage(file);
    if (!isValidImage) {
      setError("画像ファイル以外はアップロードできません。");
      return false;
    }
    return true;
  };

  // 画像選択関数
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    const reader = new FileReader();
    const file = e.target.files![0];
    if (!(validateFile(file))) {
      return;
    }
    reader.onloadend = async () => {
      setFile(file);
    };
    reader.readAsDataURL(file);
  };

  // 画像アップロード関数
  const uploadImage = async () => {
    // 参照を作成 → 'images/(画像名)'
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        setImageUrl(snapshot.ref.fullPath);
        setError("アップロードに成功しました");
      })
      .catch((error) => {
        setError("アップロードに失敗しました");
        setProgress(100);
      });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>画像アップロード</Title>
            ゲーム内で使用する画像データを格納する場合に使用します。使用されるサーバーでは、バケットを管理し、ダウンロード URL を作成できます。<br /><br />
            <Link to="/images" color="inherit">画像一覧ページ</Link>
            画像一覧では、モバイル クライアントへダウンロードを行うデータの一覧を確認出来ます。
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <form onSubmit={uploadImage}>
                <input type="file" onChange={handleImageSelect} />
                <button type="submit">アップロード</button>
              </form>
            </div>
            {progress !== 100 && <LinearProgressWithLabel value={progress} />}
            {error}
            {imageUrl && (
              <div>
                <img width="400px" src={imageUrl} alt="uploaded" />
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" color="secondary" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};