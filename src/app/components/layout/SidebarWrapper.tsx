// 'use client'; // This makes this component a client-side component

// import { useState } from 'react';
// import Sidebar from './Sidebar'; // Import the Sidebar component

// const SidebarWrapper: React.FC = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//     console.log('Sidebar Open:', !isSidebarOpen); // Add this to verify the toggle
//   };

//   return (
//     <div className="relative">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Sidebar Trigger Button */}
//       <div className="triggerbackground lg:hidden ">
//         <button
//           onClick={toggleSidebar}
//           className="p-2 bg-gray-800 text-white rounded-md"
//         >
//           {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarWrapper;
