const Loading = () => {
  return (
    // <div className="flex justify-center items-center ">
    //   <span className="loading loading-spinner text-indigo-600"></span>
    // </div>
    <div className="flex justify-center items-center h-screen">
    <div className="grid grid-cols-2 gap-2">
      <div className="w-6 h-6 bg-indigo-600 animate-bounce delay-200"></div>
      <div className="w-6 h-6 bg-indigo-600 animate-bounce delay-400"></div>
      <div className="w-6 h-6 bg-indigo-600 animate-bounce delay-600"></div>
      <div className="w-6 h-6 bg-indigo-600 animate-bounce delay-800"></div>
    </div>
  </div>
  );
};

export default Loading;
