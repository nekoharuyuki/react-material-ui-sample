import { FC } from "react";
import Title from '../../components/templates/Title';
import { storage } from "../../lib/firebase/firebase";
import { ref, uploadBytesResumable, UploadTaskSnapshot, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { validateImage } from "image-validator";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setError("");
    const reader = new FileReader();
    const file = event.target.files![0];
    // ファイルが選択されているかどうかを確認
    if (!file) {
      return;
    }
    if (!(validateFile(file))) {
      return;
    }
    // 画像ファイルが 'Blob' タイプのオブジェクトであることを確認する
    if (file instanceof Blob) {
      reader.onloadend = async () => {
        setFile(file);
        setError(`選択したファイル : ${file.name}`);
      };
      reader.readAsDataURL(file);
    } else {
      // エラーハンドリング: ファイルが 'Blob' でない場合
      setError("選択したファイルは画像ではありません。");
    }
  };

  // 画像アップロード関数
  const uploadImage = async () => {
    // 参照を作成 → 'images/(画像名)'
    if (file === null) {
      setError("ファイルが選択されていません");
      return;
    }
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot: UploadTaskSnapshot) => {
        // 進行中のsnapshotを得る
        // アップロードの進行度を表示
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (error: any) => {
        // エラーハンドリング
        setError(`アップロードに失敗しました : ${error.message}`);
        setProgress(100);
      },
      () => {
        // アップロードが完了したときの処理
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <Grid container spacing={1}>
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
                <Stack spacing={2} direction="row">
                  <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleImageSelect} />
                  </Button>
                  <Button variant="outlined" type="submit">アップロード</Button>
                </Stack>
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