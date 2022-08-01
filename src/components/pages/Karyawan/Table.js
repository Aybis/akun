import { Link } from 'react-router-dom';

/* This example requires Tailwind CSS v2.0+ */
const transactions = [
  {
    id: '1',
    nama: 'Abdul Muchtar Astria',
    nik: '9618026',
    posisi: 'FrontEnd Developer',
    email: 'abdul.muchtar@pins.co.id',
    unit: 'Operation & Support',
  },
  {
    id: '2',
    nama: 'Bayu Respati',
    nik: '99666',
    posisi: 'BackEnd Developer',
    email: 'bayu.respati@pins.co.id',
    unit: 'Operation & Support',
  },
  {
    id: '3',
    nama: 'Ahmad Fauzi Hanif',
    nik: '935666',
    posisi: 'DevOps',
    email: 'fauzi.hanif@pins.co.id',
    unit: 'Operation & Support',
  },
  // More transactions...
];

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      NIK
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Posisi
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Unit
                    </th>

                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                        {transaction.nama}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {transaction.nik}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {transaction.posisi}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {transaction.email}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {transaction.unit}
                      </td>

                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right space-x-2 text-sm font-medium sm:pr-6">
                        <Link
                          to={'/preview'}
                          className="text-blue-600 hover:text-blue-900 text-xs">
                          View
                          <span className="sr-only">, {transaction.id}</span>
                        </Link>
                        <a
                          href="#"
                          className="text-red-600 hover:text-blue-900 text-xs">
                          Hapus
                          <span className="sr-only">, {transaction.id}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
