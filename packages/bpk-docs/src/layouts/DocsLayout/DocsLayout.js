import React, { PropTypes } from 'react'

import SideNavLayout from './../SideNavLayout'
import * as routes from './../../constants/routes'

const links = [
  { route: routes.GETTING_STARTED, children: 'Getting started' },
  {
    category: 'Bonds',
    links: [
      { route: routes.BASE_STYLESHEET, children: 'Base stylesheet' },
      { route: routes.COLORS, children: 'Colors' },
      { route: routes.FONTS_AND_SPACING, children: 'Baseline grid & type ramp' },
      { route: null, children: 'Layout' },
      { route: null, children: 'Motion' }
    ]
  },
  {
    category: 'Atoms',
    links: [
      { route: routes.TYPOGRAPHY, children: 'Typography' },
      { route: routes.BUTTONS, children: 'Buttons' },
      { route: routes.ICONS, children: 'Icons' },
      { route: routes.SPINNERS, children: 'Spinners' },
      { route: routes.LOGOS, children: 'Logos' },
      { route: null, children: 'Forms' },
      { route: null, children: 'Cards' }
    ]
  },
  {
    category: 'Molecules',
    links: [
      { route: null, children: 'Banner alerts' },
      { route: null, children: 'Modal' },
      { route: null, children: 'Popover' },
      { route: null, children: 'Tooltip' },
      { route: null, children: 'Pagination' },
      { route: null, children: 'Calendar' },
      { route: null, children: 'Numerical stepper' },
      { route: null, children: 'Tabs' },
      { route: null, children: 'Primary navigation' },
      { route: null, children: 'Secondary navigation' },
      { route: null, children: 'Utility navigation' },
      { route: null, children: 'Hamburger navigation' },
      { route: null, children: 'Numerical rating' },
      { route: null, children: 'Star rating' }
    ]
  },
  {
    category: 'Organisms',
    links: [
      { route: null, children: 'Flight itinerary' },
      { route: null, children: 'Autosuggest' },
      { route: null, children: 'Date picker' },
      { route: null, children: 'Filters' },
      { route: null, children: 'Header' },
      { route: null, children: 'Footer' }
    ]
  },
  {
    category: 'Systems',
    links: [
      { route: null, children: 'Search controls' },
    ]
  }
]

export const DocsLayout = ({ children }) => (
  <SideNavLayout links={links}>
    {children}
  </SideNavLayout>
)

DocsLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default DocsLayout
