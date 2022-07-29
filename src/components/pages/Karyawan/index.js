import React from 'react';
import { Layout } from '../../includes';
import { CardHeading, Pagination } from '../../molecules';
import Table from './Table';

export default function index() {
  return (
    <Layout heading={'Karyawan'}>
      <div className="relative my-4 py-4 bg-white rounded-md">
        <CardHeading heading={'List Karyawan'} />
        <Table />
        <div className="my-8">
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}
