import {
  ClipboardListIcon,
  UserIcon,
  UserRemoveIcon,
} from '@heroicons/react/solid';
import { Headings } from '../../atoms';
import { Layout } from '../../includes';
import { SectionHeadings } from '../../molecules';

const dataSummary = [
  {
    name: 'Akun Terdaftar',
    value: '500',
    icon: ClipboardListIcon,
  },
  {
    name: 'Akun Aktif',
    value: '480',
    icon: UserIcon,
  },
  {
    name: 'Akun Tidak Aktif',
    value: '20',
    icon: UserRemoveIcon,
  },
];

export default function Index() {
  return (
    <Layout heading={'Dashboard'}>
      <SectionHeadings />
      <div className="relative mt-8">
        <Headings heading={'Summary Akun'} />
        <div className="relative grid grid-cols-3 gap-4 mt-4">
          {dataSummary.map((item, key) => (
            <div
              key={key}
              className="bg-white overflow-hidden border rounded-lg">
              <div className="px-4 py-3">
                <div className="flex items-center">
                  <div
                    className={[
                      'flex-shrink-0 p-1 rounded-md',
                      key === 0 && 'bg-blue-500',
                      key === 1 && 'bg-green-500',
                      key === 2 && 'bg-red-500',
                    ].join(' ')}>
                    <item.icon
                      className="h-6 w-6 text-gray-100"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4 w-0 flex-1">
                    <dl>
                      <dt className="text-sm leading-relaxed font-normal text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd>
                        <div className="text-xl font-medium text-gray-900">
                          {item.value}{' '}
                          <small className="text-xs font-light text-gray-400">
                            karyawan
                          </small>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 border-t px-5 py-3">
                <div className="text-sm leading-relaxed">
                  <a
                    href={item?.href}
                    className="font-medium text-gray-500 hover:text-gray-700 transition-all duration-300">
                    View all
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
