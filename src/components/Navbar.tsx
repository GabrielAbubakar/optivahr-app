






const Navbar = () => {
    return (
        <nav className="bg-gray-300 flex justify-between px-5 md:px-16 py-5">
            <p>OptivaHR</p>

            <ul className="hidden lg:flex gap-8">
                <li className="cursor-pointer hover:underline">About</li>
                <li className="cursor-pointer hover:underline">Sponsor Us</li>
                <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar