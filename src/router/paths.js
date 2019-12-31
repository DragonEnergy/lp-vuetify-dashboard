/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    name: 'Dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/ecommerce-platforms',
    name: 'eCommerce Platforms',
    view: 'eCommercePlatforms'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/booking-platforms',
    name: 'Platform List',
    view: 'BookingPlatforms'
  },
  {
    path: '/dashboard',
    view: 'Dashboard'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
