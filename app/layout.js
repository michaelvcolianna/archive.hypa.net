import Image from 'next/image'

import './main.scss'

export const metadata = {
  title: 'Hypa.NET - Premium Web Hosting',
  description: 'Premium hosting services - (877) 620 7331',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div id="branding">
            <Image alt="" src="/tiling1_left.gif" height={150} width={5} />
            <Image alt="Welcome to Hypa.net" src="/welcome.gif" height={150} width={768} priority />
          </div>

          <div id="info">
            <Image alt="" src="/tiling2_left.gif" height={171} width={6} />

            <div id="slogan">
              <Image alt="slogan" src="/slogan.gif" height={171} width={508} />
            </div>

            <div id="nav-shadow">
              <Image alt="" src="/line1.gif" height={171} width={28} />
            </div>

            <nav>
              <span><Image alt="" src="/but1.gif" height={21} width={232} /></span>
              <a href="/"><Image alt="Home" src="/but2r.gif" height={17} width={232} /></a>
              <a href="/services"><Image alt="Services" src="/but3r.gif" height={18} width={232} /></a>
              <a href="/support"><Image alt="Support" src="/but4r.gif" height={19} width={232} /></a>
              <a href="/services/hosting"><Image alt="Hosting" src="/but5r.gif" height={18} width={232} /></a>
              <a href="/services/wireless"><Image alt="Wireless" src="/but6r.gif" height={18} width={232} /></a>
              <a href="/about"><Image alt="About Us" src="/but7r.gif" height={18} width={232} /></a>
              <a href="/contact"><Image alt="Contact Us" src="/but8r.gif" height={22} width={232} /></a>
              <span><Image alt="" src="/but9.gif" height={20} width={232} /></span>
            </nav>

            <Image alt="" src="/line1.gif" height={171} width={28} />
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div>1999-2005 (c) Copyright <a href="#">harveyopolis corporation</a></div>
          <div>All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}
