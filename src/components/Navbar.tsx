interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const Navbar = async () => {
  const  res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
  const data :Category = await res.json();
  return (
    <div className="flex justify-center gap-6 my-5 w-full h-12 border items-center border-gray-500">
        {
          data.map(value=><div  key={value.id}>
              {value.icon}
              {value.nameBn}
            
            </div>)
        }
    </div>
  );
};

export default Navbar;