export default function Nav(){
    return (
        
  <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
    <div className="p-6">
      <a href="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Home</a>
      
    </div>
    <nav className="text-white text-base font-semibold pt-3">
      <a href="/admin/product" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
        <i className="fas fa-tachometer-alt mr-3" />
        Product
      </a>
      <a href="/admin/category" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
        <i className="fas fa-sticky-note mr-3" />
        Categories
      </a>
   
    </nav>
    <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
      <i className="fas fa-arrow-circle-up mr-3" />
      Upgrade to Pro!
    </a>
  </aside>
  
    );
}