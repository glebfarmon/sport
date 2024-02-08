import {RefAttributes, SVGProps} from 'react'
import {RotateCw} from 'lucide-react'
import {cn} from '@/utils'

export const Spinner = ({
  className,
  ...props
}: RefAttributes<SVGSVGElement> & Partial<SVGProps<SVGSVGElement>>) => {
  return <RotateCw className={cn('mr-2 h-4 animate-spin', className)} {...props} />
}
