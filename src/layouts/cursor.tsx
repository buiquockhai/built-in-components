import { createRef, useEffect, useRef } from 'react'

export function Cursor() {
  const cursor = createRef<HTMLDivElement>()
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      positionRef.current.mouseX = event.x
      positionRef.current.mouseY = event.y
    }

    const mouseOver = () => {
      cursor.current?.firstElementChild?.classList.add('cursor-inner-active')
    }

    const mouseOut = () => {
      cursor.current?.firstElementChild?.classList.remove('cursor-inner-active')
    }

    const links = document.querySelectorAll('a')

    if (cursor.current && typeof window !== 'undefined') {
      document.addEventListener('mousemove', mouseMove)
      Array.from(links).forEach((element) => {
        element.addEventListener('mouseover', mouseOver)
        element.addEventListener('mouseout', mouseOut)
      })
    }

    return () => {
      document.removeEventListener('mousemove', mouseMove)
      Array.from(links).forEach((element) => {
        element.removeEventListener('mouseover', mouseOver)
        element.removeEventListener('mouseout', mouseOut)
      })
    }
  }, [cursor])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        const newDistanceX = (mouseX - destinationX) * 0.075
        const newDistanceY = (mouseY - destinationY) * 0.075
        positionRef.current.distanceX = newDistanceX
        positionRef.current.distanceY = newDistanceY
        if (Math.abs(newDistanceX) + Math.abs(newDistanceY) < 0.1) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      const cursorRef = cursor.current as HTMLDivElement
      cursorRef.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
    }
    followMouse()
  }, [cursor])

  return (
    <div ref={cursor} className='cursor'>
      <div className='cursor-inner'></div>
    </div>
  )
}
