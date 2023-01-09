import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useEffect } from 'react';

function randomNotification() {
  const options = {
    body: 'asda',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
  };
  new Notification('Asd', options);
  console.log('ASD');
  setTimeout(randomNotification, 2000);
}

function Page1() {
  useEffect(() => {
    if (Notification.permission === 'granted') {
      randomNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          randomNotification();
        }
      });
    }
  }, []);

  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 1</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
