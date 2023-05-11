import {
  ForwardRefRenderFunction,
  ReactNode,
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import classnames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
  duration?: number
}

type Handler = {
  open?: () => void
  close?: () => void
  toggle?: () => void
}

const Accordion: ForwardRefRenderFunction<Handler, Props> = (
  { children, className, duration = 250 },
  forwardRef,
) => {
  const blocking = useRef<boolean>(false)
  const open = useRef<boolean>(false)
  const accordion = createRef<HTMLDivElement>()

  const onOpen = () => {
    if (blocking.current) return open.current
    if (accordion.current) {
      blocking.current = true
      accordion.current.classList.add('accordion-show')
      const { clientHeight } = accordion.current
      accordion.current.classList.add('accordion-run')
      accordion.current.offsetHeight
      accordion.current.style.height = `${clientHeight}px`
      open.current = true
      return open.current
    }
    return open.current
  }

  const onClose = () => {
    if (blocking.current) return open.current
    if (accordion.current) {
      blocking.current = true
      accordion.current.classList.remove('accordion-show')
      accordion.current.classList.remove('accordion-ui')
      accordion.current.style.height = `${accordion.current.clientHeight}px`
      accordion.current.offsetHeight
      accordion.current.classList.add('accordion-run')
      accordion.current.style.height = ''
      open.current = false
      return open.current
    }
    return open.current
  }

  const onTransitionEnd = () => {
    if (accordion.current) {
      accordion.current.classList.remove('accordion-run')
      accordion.current.classList.add('accordion-ui')
      accordion.current.style.height = ''
      blocking.current = false
    }
  }

  useImperativeHandle(forwardRef, () => ({
    open: () => {
      return onOpen()
    },
    close: () => {
      return onClose()
    },
    toggle: () => {
      console.log('here', open.current)
      return open.current ? onClose() : onOpen()
    },
  }))

  useEffect(() => {
    if (typeof duration === 'number') {
      document.documentElement.setAttribute(
        'style',
        `--accordion-duration: ${duration}ms`,
      )
    }
  }, [duration])

  return (
    <div
      className={classnames('accordion-ui', className)}
      ref={accordion}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  )
}

export default forwardRef(Accordion)
