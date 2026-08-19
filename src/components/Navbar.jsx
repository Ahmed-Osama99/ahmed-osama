const Navbar = () => {
  return (
    <header className=" container py-4 flex items-center justify-between">
      <h1 className="ao-name font-caveat text-black text-2xl font-bold">
        Ahmed Osama
      </h1>
      <a
        href="https://wa.me/201147480962"
        rel="noreferrer"
        className="bg-main px-4 py-2.5 rounded-full ring-4 hover:inset-shadow-black/70 hover:inset-shadow-sm transition-all ring-main/20 shadow uppercase text-white "
      >
        Contact
      </a>
    </header>
  );
};

export default Navbar;
