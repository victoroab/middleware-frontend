import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface MenuIconProps {
  icon: ReactNode
  text: string
  className?: string
}

export default function IconMenu({ className, icon, text }: MenuIconProps) {
  return (
    <div
      className={cn(
        'flex flex-row items-center justify-center space-x-2 text-center',
        className
      )}
    >
      {icon}
      <span className='text-sm'>{text}</span>
    </div>
  )
}
