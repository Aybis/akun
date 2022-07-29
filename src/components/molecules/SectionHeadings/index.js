import { PlusIcon } from '@heroicons/react/solid';
import svg from '../../../assets/svg/1.svg';

export default function index({ title, subtitle }) {
  return (
    <div className="bg-blue-400 relative rounded-lg mt-6 shadow-lg shadow-blue-400/50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:px-4 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold leading-relaxed text-white sm:text-2xl sm:tracking-tight lg:text-4xl">
            Aute ex qui aute aute dolor.
          </h2>
          <p className="mt-2 text-base leading-relaxed text-gray-200">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          <button
            type="button"
            className="relative mt-6 inline-flex items-center px-4 py-2 border-2 border-gray-200 shadow-sm text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-600 hover:border-transparent hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
            <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Pengajuan Akun
          </button>
        </div>
        <div className="relative pr-8 -mt-6">
          <img src={svg} alt="" className="h-48" />
        </div>
      </div>
    </div>
  );
}
