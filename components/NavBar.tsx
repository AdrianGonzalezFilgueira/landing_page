export default function NavBar() {
    return (
        <header className="mx-auto container">
        <nav className="">
          <ul className="flex items-center text-center">
            <li className="w-1/5">
              <a href="#info">nosotros</a>
            </li>
            <li className="w-1/5">
              <a href="#projects">proyectos</a>
            </li>
            <li className="w-1/5">
              <h1 className="text-4xl">VALTUA</h1>
            </li>
            <li className="w-1/5">
              <a href="#team">equipo</a>
            </li>
            <li className="w-1/5">
              <a>contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }