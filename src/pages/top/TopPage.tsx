import { FC } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Title from '../../components/templates/Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export const TopPage: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Title>管理画面トップ</Title>
            ゲーム開発の開発効率を飛躍的に向上させることを目的に開発された汎用ゲームサーバーです。<br /><br />
            モバイル・Webアプリケーションのプラットフォームである『Firebase』を利用すると、開発や運用の際にバックエンドで動くサービスを作成・管理する手間がなくなります。<br />
            その分スピーディーに環境整備ができるようになって、サービスの早期リリースが可能です。
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
            <Title>ダッシュボード</Title>
            ダッシュボードは、BI（ビジネスインテリジェンス）ツールの一つで、サービスに蓄積された大量のデジタルデータを収集し、分析し、集計値や表、グラフなど分かりやすい形で可視化を実現します。
            <ul>
              <li>ユーザー分析</li>
              <li>課金分析</li>
              <li>コンテンツ分析</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
