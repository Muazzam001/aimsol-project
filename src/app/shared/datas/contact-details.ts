import { ContactDetail } from "../models/contact-config";

export let itemsContactDetails: ContactDetail[] = [
  {
    icon: 'phone',
    cat: 'phn',
    label: 'Contact Us',
    type: 'tel',
    content: '+3 444 555 555',
  },
  {
    icon: 'envelope',
    cat: 'eml',
    label: 'Email',
    type: 'mailto',
    content: 'angular@test.com',
  },
  {
    icon: 'map',
    cat: 'ads',
    label: 'Address',
    content: 'Lahore, Pakistan',
  },
];
