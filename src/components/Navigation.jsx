import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Меню', href: '#menu' },
    { label: 'Бронь', href: '#booking' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">Гастроном</div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-6"
        >
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-white hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-900 p-4"
        >
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="block py-2 text-white hover:bg-slate-800 rounded"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation