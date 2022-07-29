import React from 'react';
import { Layout } from '../../includes';
import { CardHeading, Pagination, Table } from '../../molecules';

export default function index() {
  return (
    <Layout heading={'Tracking'}>
      <div className="relative mt-4 py-4 bg-white rounded-md">
        <CardHeading heading={'Tracking Document'} />
        <Table />
        <div className="relative my-8"></div>
        <Pagination />
      </div>
    </Layout>
  );
}
