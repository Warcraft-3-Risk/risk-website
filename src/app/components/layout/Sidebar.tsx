// 'use client';

// import React from 'react';

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 z-10 h-full w-64 bg-cover bg-center transition-transform duration-300 ease-in-out ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}
//       style={{
//         backgroundImage: 'url("/images/castletower.webp")', // Ensure this path is correct and the image exists
//       }}
//     >
//       <div className="p-6 text-white">
//         <h2 className="text-2xl font-bold">Sidebar</h2>
//         <ul className="mt-6 space-y-4">
//           <li>
//             <a href="#" className="hover:text-gray-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-300">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-300">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-300">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Close Sidebar button inside sidebar */}
//       <button
//         onClick={toggleSidebar}
//         className="absolute top-6 right-6 p-2 bg-gray-800 text-white rounded-md"
//       >
//         Close Sidebar
//       </button>
//     </div>
//   );
// };

// export default Sidebar;
