import React from 'react'
import * as things from '../assets/hardcoded-svg-defs.svg'

const Icon = ({ type, className }) => (
  <svg className={`dib v-mid ${things.className}`}
    width="1em"
    height="1em"
  >
    <use xlinkHref={`#${type}`} />
  </svg>
);

export default Icon
