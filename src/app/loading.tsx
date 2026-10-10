const Loading = () => {
return ( <div className="min-h-screen bg-gray-50 px-4 py-8"> <div className="mx-auto max-w-7xl">
<div className="mb-8"> 
  <div className="mb-3 h-8 w-48 animate-pulse rounded-md bg-gray-200">

  </div>
   <div className="h-4 w-64 max-w-full animate-pulse rounded bg-gray-200">
    </div>
     </div>


    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
     
     
          <div className="mb-4 h-48 animate-pulse rounded-lg bg-gray-200"></div>

         
         
          <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>

     
     
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>

          
          
          <div className="flex items-center justify-between">
            <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

);
};

export default Loading;
