import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="container py-3 flex items-center justify-between">
            <h1 className="font-caveat text-2xl font-bold">Ahmed Osama</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><NavLink href="#portfolio" className="hover:text-muted-teal">Projects</NavLink></li>
                    <li><NavLink href="#about" className="hover:text-muted-teal">Skills</NavLink></li>
                    <li><NavLink href="#contact" className="hover:text-muted-teal">Contact Me</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar