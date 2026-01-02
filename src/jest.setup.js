import '@testing-library/jest-dom'
import React from 'react'

// Polyfill for structuredClone with better handling
global.structuredClone =
  global.structuredClone ||
  (obj => {
    if (obj === undefined) return undefined
    if (obj === null) return null
    return JSON.parse(JSON.stringify(obj))
  })

// Mock framer-motion globally with forwardRef support for chakra
jest.mock('framer-motion', () => {
  const React = require('react')

  const createMotionComponent = tag => {
    const Component = React.forwardRef(({ children, ...props }, ref) => {
      const {
        initial,
        animate,
        exit,
        transition,
        variants,
        whileHover,
        whileTap,
        whileFocus,
        whileInView,
        drag,
        dragConstraints,
        dragElastic,
        dragMomentum,
        layout,
        layoutId,
        onAnimationStart,
        onAnimationComplete,
        ...rest
      } = props
      return React.createElement(tag, { ref, ...rest }, children)
    })
    Component.displayName = `motion.${tag}`
    return Component
  }

  return {
    motion: {
      div: createMotionComponent('div'),
      article: createMotionComponent('article'),
      span: createMotionComponent('span'),
      section: createMotionComponent('section'),
      header: createMotionComponent('header'),
      footer: createMotionComponent('footer'),
      nav: createMotionComponent('nav'),
      main: createMotionComponent('main'),
      a: createMotionComponent('a'),
      button: createMotionComponent('button'),
      img: createMotionComponent('img'),
      p: createMotionComponent('p'),
      h1: createMotionComponent('h1'),
      h2: createMotionComponent('h2'),
      h3: createMotionComponent('h3'),
      ul: createMotionComponent('ul'),
      li: createMotionComponent('li')
    },
    AnimatePresence: ({ children }) =>
      React.createElement(React.Fragment, null, children)
  }
})
