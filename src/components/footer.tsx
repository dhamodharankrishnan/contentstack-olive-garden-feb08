import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { FooterProps, NavmenuProps, Social } from "../typescript/layout";

export default function Footer({ footer, navMenu }: { footer: FooterProps, navMenu: NavmenuProps }) {
  return (
    // <footer>
    //   <div classNameName='max-width footer-div'>
    //     <div classNameName='col-quarter'>
    //       <Link to='/'>
    //         {footer.logo ? (
    //           <img
    //             {...footer.logo.$?.url as {}}
    //             src={footer.logo.url}
    //             alt='contentstack logo'
    //             title='contentstack'
    //             classNameName='logo footer-logo'
    //           />
    //         ) : (
    //           <Skeleton width={100} />
    //         )}
    //       </Link>
    //     </div>
    //     <div classNameName='col-half'>
    //       <nav>
    //         <ul classNameName='nav-ul'>
              // {navMenu.length ? (
              //   navMenu?.map((link) => (
              //     <li key={link.title} classNameName='footer-nav-li'>
              //       <NavLink {...link.$?.title} to={link.href}>
              //         {link.title}
              //       </NavLink>
              //     </li>
              //   ))
              // ) : (
              //   <li classNameName='footer-nav-li'>
              //     <Skeleton width={200} />
              //   </li>
              // )}
    //         </ul>
    //       </nav>
    //     </div>
    //     <div classNameName='col-quarter social-link'>
    //       <div classNameName='social-nav'>
    //         {Object.keys(footer).length ? (
    //           footer.social.social_share?.map((social: Social) => (
    //             <a
    //               href={social.link.href}
    //               title={social.link.title}
    //               key={social.link.title}
    //             >
    //               <img
    //                 {...social.icon.$?.url as {}}
    //                 src={social.icon.url}
    //                 alt='social icon'
    //               />
    //             </a>
    //           ))
    //         ) : (
    //           <a>
    //             <Skeleton width={100} />
    //           </a>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // {footer.copyright ? (
    //   <div classNameName='copyright' {...footer.$?.copyright as {}}>
    //     {parse(footer.copyright)}
    //   </div>
    // ) : (
    //   <div classNameName='copyright'>
    //     <Skeleton width={500} />
    //   </div>
    // )}
    // </footer>
    <footer id="footer" className="footer mt-5" >

      <div className="container pt-5 border-bottom">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5 className="mb-4 font-weight-bold text-uppercase" role="heading" >About</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Contact Us</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">About Olive Garden</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Nutritional &amp; Allergens</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Careers</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Community</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">FAQs</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Press</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">International Franchising</li>
            </ul>
          </div>



          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5 className="mb-4 font-weight-bold text-uppercase" role="heading">Gift Cards &amp; Offers</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Buy Gift Cards</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Check Gift Card Balances</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Specials</li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5 className="mb-4 font-weight-bold text-uppercase" role="heading">Ordering</h5>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Order To Go</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">My Account</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Lookup Order</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Order History</li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">Locations</li>
            </ul>
          </div>

          <ul className="footer-nav-secondary mb-1 mt-2">
          {navMenu.length ? (
                navMenu?.map((link) => (
                  <li key={link.title} className='footer-nav-item'>
                    <NavLink {...link.$?.title} to={link.href}>
                      {link.title}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li className='footer-nav-item'>
                  <Skeleton width={200} />
                </li>
              )}

          </ul>
          {footer.copyright ? (
            <div className="paragraph-copy copyright" {...footer.$?.copyright as {}}>
              {parse(footer.copyright)}
            </div>
          ) : (
            <div className='paragraph-copy copyright'>
              <Skeleton width={500} />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
