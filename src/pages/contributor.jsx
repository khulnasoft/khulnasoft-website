import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/pages/home/get-started/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorPage = () => (
  <Layout>
    <div className="safe-paddings pt-44">
      <div className="container-lg grid grid-cols-12 items-start gap-x-8">
        <Profile />
        <Achievements />
      </div>
    </div>
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorPage;
