import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <h1>In the name of Allah</h1> */}
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* header */}
          <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
              <img src="https://i.ibb.co/FDX9JVr/notes.png" className="w-6 h-6" alt="Add todo" />
              <input type="text" placeholder="Type your todo" className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" />
              <button type="submit" className="appearance-none w-8 h-8 bg-[url('https://i.ibb.co/ftCgvD6/plus.png')] bg-no-repeat bg-contain" />
            </form>
            <ul className="flex justify-between my-4 text-xs text-gray-500">
              <li className="flex space-x-1 cursor-pointer">
                <img className="w-4 h-4" src="https://i.ibb.co/wC3HNPF/double-tick.png" alt="Complete" />
                <span>Complete All Tasks</span>
              </li>
              <li className="cursor-pointer">Clear completed</li>
            </ul>
          </div>
          <hr className="mt-4" />
          {/* todo list */}
          <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {/* todo */}
            <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
              <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                <input type="checkbox" className="opacity-0 absolute rounded-full" />
                <svg className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div className="select-none flex-1 line-through">
                Learn React from Learn with Sumit YouTube Channel
              </div>
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500" />
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500" />
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500" />
              <img src="https://i.ibb.co/XbGNrFK/cancel.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel" />
            </div>
            {/* todo */}
            <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
              <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                <input type="checkbox" className="opacity-0 absolute rounded-full" />
                <svg className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div className="select-none flex-1">
                Learn Redux from Think in a Redux way course
              </div>
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500" />
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500" />
              <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500" />
              <img src="https://i.ibb.co/XbGNrFK/cancel.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel" />
            </div>
          </div>
          <hr className="mt-4" />
          {/* footer */}
          <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>2 tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
              <li className="cursor-pointer font-bold">All</li>
              <li>|</li>
              <li className="cursor-pointer">Incomplete</li>
              <li>|</li>
              <li className="cursor-pointer">Complete</li>
              <li />
              <li />
              <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500" />
              <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer" />
              <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer" />
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
