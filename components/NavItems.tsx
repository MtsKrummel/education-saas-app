'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  {label: 'Inicio', href: '/'},
  {label: 'Profesores', href: '/companions'},
  {label: 'Mi Ruta', href: '/profile'},
  {label: 'Cerrar Sesión', href: '/sign-in'},
]

const NavItems = () => {
  const pathname = usePathname()
  return (
    <nav className='flex items-center gap-x-4'>
      {navItems.map(({ label, href }) => (
        <Link 
          key={label} 
          href={href}
          className={cn(pathname === href && 'text-primary font-semibold bg-chart-5 rounded-full p-2 transition-all')}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems