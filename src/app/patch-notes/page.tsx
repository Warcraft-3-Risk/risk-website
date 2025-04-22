import React from 'react';
import '@/core/SCSS/base/_vars.scss';
import '@/core/SCSS/base/layout/l-patch-notes.scss';
//TODO: Create a Patch Notes page, remember that we are showing old and new versions
const PatchNotesPage = () => {
  const patchNotes = [
    {
      version: '1.2.0',
      date: '2023-10-01',
      notes: [
        'Added new feature X.',
        'Improved performance of feature Y.',
        'Fixed bug in feature Z.',
      ],
    },
    {
      version: '1.1.0',
      date: '2023-09-15',
      notes: [
        'Introduced feature Y.',
        'Minor UI improvements.',
        'Fixed issue with login flow.',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <h1 className="penis text-7xl font-bold mb-4 flex justify-center">
          Patch Notes
        </h1>
        <div className="background h-[100vh] w-[100%]">
          {patchNotes.map((patch, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold">
                Version {patch.version} -{' '}
                <span className="text-gray-600">{patch.date}</span>
              </h2>
              <ul className="list-disc list-inside mt-2">
                {patch.notes.map((note, idx) => (
                  <li key={idx} className="text-gray-800">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatchNotesPage;
