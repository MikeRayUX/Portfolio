import React from 'react';
import { Helmet } from 'react-helmet';

const ReusableHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default ReusableHelmet;