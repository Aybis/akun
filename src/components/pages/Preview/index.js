import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Layout } from '../../includes';

export default function Index() {
  const navigate = useNavigate();
  return (
    <Layout heading={'Preview Akun'}>
      <div className="relative bg-white mt-4 rounded-md p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Informasi Personal
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Occaecat consequat duis ipsum ea non commodo eiusmod et aliquip
              sint labore..
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Nama
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={'Abdul Muchtar Astria'}
                  disabled
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                NIK
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  name="nik"
                  type="text"
                  disabled
                  placeholder="Akan diberikan HR kemudian"
                  autoComplete="nik"
                  className="disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-gray-400 block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Username
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  disabled
                  value={'abdul.muchtar'}
                  placeholder="user.name"
                  autoComplete="email"
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed block max-w-lg placeholder:text-gray-400 lowercase w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Email
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  disabled
                  value={'abdul.muchtar'}
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed block max-w-xs w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-gray-700 text-sm ml-1.5">@pins.co.id</p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                No. Handphone
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    +62
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="8123456789"
                    value={'8123456789'}
                    disabled
                    className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed flex-1 block placeholder:text-gray-400 w-full focus:ring-blue-500 focus:border-blue-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Unit
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  disabled
                  autoComplete="email"
                  placeholder="Operation & Support"
                  className="disabled:bg-gray-100 disabled:cursor-not-allowed block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Posisi
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  disabled
                  autoComplete="email"
                  value={'Senior Frontend Developer'}
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Alamat
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  disabled
                  value={
                    'Jl. Raya Cikarang No.1, Cikarang Barat, Cikarang, Bekasi, Indonesia'
                  }
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed max-w-lg shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Tempat Lahir
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  value={'Sumba'}
                  disabled
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Tanggal Lahir
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="date"
                  name="region"
                  id="region"
                  disabled
                  value={'1996-04-04'}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  autoComplete="address-level1"
                  className="disabled:bg-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Jenis Kelamin
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      checked
                      disabled
                      className="disabled:cursor-not-allowed  focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700">
                      Pria
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                KTP
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <img
                  src="https://singowijaya.files.wordpress.com/2014/04/ktp.jpg"
                  alt=""
                  className="h-40 object-contain rounded-md sm:w-auto w-full"
                />
              </div>
            </div>
          </div>

          <Checkbox />

          <div className="pt-5">
            <div className="flex justify-between">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300">
                Back
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
