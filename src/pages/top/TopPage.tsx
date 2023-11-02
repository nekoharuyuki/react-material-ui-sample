import { FC } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Title from '../../components/templates/Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

export const TopPage: FC = () => {
  return (
    <Box sx={{ display: 'flex', maxWidth: '100%' }}>
      <IntroductionTabs />
      <Toolbar />
    </Box>
  );
};

function ExplanationTab() {
  return(
    <Grid container spacing={1}>
    <Grid item xs={12} >
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Title>管理画面について</Title>
        ゲーム開発の開発効率を飛躍的に向上させることを目的に開発された汎用ゲームサーバーです。<br /><br />
        モバイル・Webアプリケーションのプラットフォームである『Firebase』を利用すると、開発や運用の際にバックエンドで動くサービスを作成・管理する手間がなくなります。
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
  );
}

export default function IntroductionTabs() {
  const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Tab = styled(BaseTab)`
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid ${blue[200]};
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: ${blue[600]};
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `
    width: 100%;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    `,
  );
  
  const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
  );
  
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>説明</Tab>
        <Tab value={1}>ゲームクライアント設定</Tab>
        <Tab value={2}>ゲームサーバー設定</Tab>
      </TabsList>
      <TabPanel value={0}><ExplanationTab/></TabPanel>
      <TabPanel value={1}><ExplanationTab/></TabPanel>
      <TabPanel value={2}><ExplanationTab/></TabPanel>
    </Tabs>
  );
}
