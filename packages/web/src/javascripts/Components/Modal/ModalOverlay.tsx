import { DialogOverlay, DialogOverlayProps } from '@reach/dialog'
import { classNames } from '@standardnotes/snjs'
import { ReactNode } from 'react'
import { useModalAnimation } from '../Modal/useModalAnimation'

type Props = {
  isOpen: boolean
  onDismiss?: () => void
  children: ReactNode
  className?: string
} & DialogOverlayProps

const ModalOverlay = ({ isOpen, onDismiss, children, className, ...props }: Props) => {
  const [isMounted, setElement] = useModalAnimation(isOpen)

  if (!isMounted) {
    return null
  }

  return (
    <DialogOverlay
      className={classNames('p-0 md:px-0 md:opacity-100', className)}
      onDismiss={onDismiss}
      ref={setElement}
      {...props}
    >
      {children}
    </DialogOverlay>
  )
}

export default ModalOverlay