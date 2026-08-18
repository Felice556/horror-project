import type { NavItem } from '../types/navBar';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#home' },
  {
    label: 'ARCHIVIO',
    href: '#archivio'
  } ,
  {label: 'ENIGMI', href: '#enigmi'},
  {
    label: '???',
    href: '#???',
    isSecret: true  
  }
];