import React from 'react';

/**
 * Icons are created using https://www.smooth-code.com/open-source/svgr/playground/
 * Note: use a <title> as first child within <svg> if
 * the icon is not purely decorative.
 * If this is the case ensure not to use aria-hidden="true".
 */

const commonProps = {
  width: '1em',
  height: '1em',
  focusable: false,
  'aria-hidden': true
};

export const ListIcon = props => (
  <svg {...commonProps} viewBox="0 0 100 100" {...props}>
    <path d="M40.7 80h41c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2h-41c-1.1 0-2 .9-2 2V78c0 1.1.9 2 2 2zm0-26.3h41c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2h-41c-1.1 0-2 .9-2 2v3.5c0 1.1.9 2 2 2zm0-26.2h41c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2h-41c-1.1 0-2 .9-2 2v3.5c0 1.1.9 2 2 2z" />
    <circle cx={23.8} cy={76.2} r={7.5} />
    <circle cx={23.8} cy={50} r={7.5} />
    <circle cx={23.8} cy={23.7} r={7.5} />
  </svg>
);
