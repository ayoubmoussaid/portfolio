import * as React from 'react'
import { func, bool } from 'prop-types'
import { motion, SVGMotionProps, Transition } from 'framer-motion'

type PathProps = React.SVGAttributes<SVGPathElement> &
  SVGMotionProps<SVGPathElement>

function Path(props: PathProps) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    />
  )
}

interface Props {
  /** State of the button open or closed  */
  isOpen?: boolean
  /** Color of the line on the burger */
  color?: string
}


/**
 * Based on this:
 * https://codesandbox.io/s/animated-burger-5q20i?file=/src/App.tsx:118-165
 */

/**
 * "Burger" is button to display or hide a menu such as a side bar
 */
function Burger({ isOpen = false, color = null }: Props) {
  const spring = {
    ease: [0.175, 0.885, 0.32, 1.275],
    duration: 0.3,
  } as Transition

  return (
    <motion.svg
        className="fill-current h-6 w-6"

        viewBox="0 0 21 21"
        // @ts-ignore
        type="button"
        initial={isOpen ? 'open' : 'closed'}
        animate={isOpen ? 'open' : 'closed'}
    >
      <Path
        variants={{
          closed: {
            d: ['M 3 16.5 L 17 2.5', 'M 2 9.5 L 20 9.5', 'M 2 2.5 L 20 2.5'],
          },
          open: {
            d: ['M 2 2.5 L 20 2.5', 'M 2 9.5 L 20 9.5', 'M 3 16.5 L 17 2.5'],
          },
        }}
        stroke={color}
        transition={spring}
      />
      <Path
        d="M 2 9.5 L 20 9.5"
        variants={{
          closed: { opacity: [0, 0, 1, 1] },
          open: { opacity: [1, 1, 0, 0] },
        }}
        stroke={color}
        transition={{ duration: 0.3 }}
      />
      <Path
        variants={{
          closed: {
            d: ['M 3 2.5 L 17 16.5', 'M 2 9.5 L 20 9.5', 'M 2 16.5 L 20 16.5'],
          },
          open: {
            d: ['M 2 16.5 L 20 16.5', 'M 2 9.5 L 20 9.5', 'M 3 2.5 L 17 16.5'],
          },
        }}
        stroke={color}
        transition={spring}
      />
    </motion.svg>
  )
}

Burger.defaultProps = {  isOpen: false }
Burger.propTypes = { isOpen: bool }

export default Burger
