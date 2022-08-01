const apps = [
  { id: 1, name: 'MyDay', checked: true },
  { id: 2, name: 'Email', checked: true },
  { id: 3, name: 'LDAP', checked: true },
  { id: 4, name: 'Cuti', checked: true },
  { id: 5, name: 'SPPD', checked: true },
  { id: 6, name: 'Storage', checked: false },
  { id: 7, name: 'Panjar', checked: false },
  { id: 8, name: 'Pipeline', checked: false },
  { id: 9, name: 'CRM', checked: false },
  { id: 10, name: 'LPL', checked: false },
  { id: 11, name: 'Handover', checked: false },
  { id: 12, name: 'Warehouse', checked: false },
];

export default function Index() {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">
        Aplikasi PINS
      </legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 grid grid-cols-2 gap-x-8">
        {apps.map((app, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label
                htmlFor={`person-${app.id}`}
                className="font-medium text-gray-700 select-none">
                {app.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`person-${app.id}`}
                name={`person-${app.id}`}
                type="checkbox"
                checked={app.checked}
                disabled
                onChange={(e) => {
                  apps[personIdx].checked = e.target.checked;
                }}
                className="disabled:cursor-not-allowed focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
