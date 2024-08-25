export let itemsNavMenu: Object[] = [
  {
    label: 'Home',
    link: '/',
    icon: "fa-home"
  },
  {
    label: 'Products',
    link: 'products',
    icon: "fa-home",
    children: [
      {
        "label": "Electronics",
        "link": "/products/electronics"
      },
      {
        "label": "Fashion",
        "link": "/products/fashion"
      }
    ]
  },
  {
    label: 'About',
    link: '/about',
    icon: "fa-home"
  },
  {
    label: 'Gallery',
    link: '/gallery',
    icon: "fa-home"
  },
  {
    label: 'Blog',
    link: '/blog',
    icon: "fa-home"
  },
  {
    label: 'Contact',
    link: '/contact',
    icon: "fa-home"
  },
];
