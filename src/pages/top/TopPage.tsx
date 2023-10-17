import { FC } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Title from '../../components/templates/Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

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
            その分スピーディーに環境整備ができるようになって、サービスの早期リリースが可能です。<br /><br />
            <Title>お問い合わせ</Title>
            お問い合わせ、ご要望等がございましたら、お気軽にお問い合わせください。
            <Link to="https://nekoharuyuki.github.io/Form.io/" color="inherit" >https://nekoharuyuki.github.io/Form.io/</Link>
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
              <li><Link to="/Dashboard" color="inherit">ユーザー分析</Link> : ビジネスやサービスの改善、効果的なマーケティングの策定、ユーザーエンゲージメント向上などの目的に使用されます。</li>
              <li><Link to="/Dashboard" color="inherit">課金分析</Link> : 収益モデルを最適化し、収益を最大化するための洞察を提供します。</li>
              <li><Link to="/Dashboard" color="inherit">コンテンツ分析</Link> : コンテンツ戦略の改善、ユーザーエンゲージメントの向上、コンバージョン率の向上などの目的に使用されます。</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
