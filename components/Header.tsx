'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function Header(){
 const pathname=usePathname();const [open,setOpen]=useState(false);
 const links=[{href:'/',label:'Work'},{href:'/about',label:'About'},{href:'/contact',label:'Contact'}];
 return <header className="site-header"><Link className="identity" href="/" aria-label="Adam Arash Hoglund home" onClick={()=>setOpen(false)}>ADAM<span className="identity-dot">.</span><span className="identity-surname">ARASH HOGLUND</span></Link><button aria-expanded={open} aria-label="Toggle menu" className="menu-toggle" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span>{open?'×':'☰'}</span></button><nav className={open?'main-nav nav-open':'main-nav'} aria-label="Main navigation">{links.map(l=><Link key={l.href} onClick={()=>setOpen(false)} href={l.href} className={pathname===l.href||(l.href==='/'&&pathname.startsWith('/work'))?'active':''}>{l.label}</Link>)}</nav><a className="header-availability" href="mailto:info@hoglundskompetens.se"><span className="status-dot"/> Let's talk <span>↗</span></a></header>
}
