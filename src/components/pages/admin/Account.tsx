import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../templates/Title';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Avatar from '@mui/material/Avatar';
import StyledBadge from '@mui/material/Badge';

import avatar1 from './avatars/1.jpg'
import avatar2 from './avatars/2.jpg'
import avatar3 from './avatars/3.jpg'
import avatar4 from './avatars/4.jpg'
import avatar5 from './avatars/5.jpg'
import avatar6 from './avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'USA' },
    usage: {
      value: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Mastercard' },
    activity: '10 sec ago',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Avram Tarasios',
      new: false,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Brazil' },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'info',
    },
    payment: { name: 'Visa' },
    activity: '5 minutes ago',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'India' },
    usage: {
      value: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'warning',
    },
    payment: { name: 'Stripe' },
    activity: '1 hour ago',
  },
  {
    avatar: { src: avatar4, status: 'secondary' },
    user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'France' },
    usage: {
      value: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'danger',
    },
    payment: { name: 'PayPal' },
    activity: 'Last month',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Spain' },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'primary',
    },
    payment: { name: 'Google Wallet' },
    activity: 'Last week',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'Friderik Dávid',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Poland' },
    usage: {
      value: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Amex' },
    activity: 'Last week',
  },
]

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Accounts() {
  return (
    <React.Fragment>
      <Title>アカウント一覧</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><PeopleAltIcon /></TableCell>
            <TableCell>User</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Usage</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableExample.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                <Avatar alt={item.user.name} src={item.avatar.src} />
                </StyledBadge>
              </TableCell>
              <TableCell>
                {item.user.name}
                <div>
                  <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '} {item.user.registered}
                </div>
              </TableCell>
              <TableCell>{item.country.name}</TableCell>
              <TableCell>{item.country.name}</TableCell>
              <TableCell>{item.country.name}</TableCell>
              <TableCell>{item.country.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
