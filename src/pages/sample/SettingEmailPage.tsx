import { FC } from "react";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { tokens } from "../../theme/theme";

const colors = tokens();

export const SettingEmailPage: FC = () => {
  return(
    <div>メールアドレス変更ページ<UnstyledTabsIntroduction /></div>
  );
};

export default function UnstyledTabsIntroduction() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>My account</Tab>
        <Tab value={1}>Profile</Tab>
        <Tab value={2}>Language</Tab>
      </TabsList>
      <TabPanel value={0}>My account page</TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
      <TabPanel value={2}>Language page</TabPanel>
    </Tabs>
  );
}

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
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
    background-color: ${colors.blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${colors.blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${colors.blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? colors.grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `,
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${colors.blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? colors.grey[900] : colors.grey[200]};
  `,
);
