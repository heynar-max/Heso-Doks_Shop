import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"


export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/* logo  */}
            <div>
                <Link
                    href='/'>
                        <span className={ ''}>Heso Doks</span>
                        <span className={ ''}> | Shop</span>
                </Link>
            </div>
            {/* center menu  */}
            <div className="hidden custom-800:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/men'>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/women'>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/kid'>Niños</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/dorado'>doradas</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/plateado'>plateadas</Link>
            </div>
            {/* Search, Cart, Menu  */}
            <div className="flex items-center">
                <Link href='/search' className="mx-2">
                    <IoSearchOutline className="w-5 h-5"/>
                </Link>
                <Link href='/cart' className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                            3
                        </span>
                        <IoCartOutline className="w-5 h-5"/>
                    </div>
                </Link>
                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    menú
                </button>
            </div>
        </nav>
    )
}