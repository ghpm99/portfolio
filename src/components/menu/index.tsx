import Link from 'next/link'

const Menu = () => {
    return (
        <div>
            <Link href={'/'}>Inicio</Link>
            <Link href={'/#projects'}>Projetos</Link>
            <Link href={'/#about'}>Sobre</Link>
        </div>
    )
}

export default Menu