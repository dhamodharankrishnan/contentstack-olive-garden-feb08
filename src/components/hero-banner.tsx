import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { BannerProps } from "../typescript/banner";

export default function HeroBanner(props: BannerProps) {
  const banner = props.hero_banner;
  return (
    // <div
    //   className='hero-banner'
    //   style={{
    //     background: banner.bg_color ? banner.bg_color : '',
    //   }}
    // >
    //   <div
    //     className='home-content'
    //     style={{ color: banner.text_color ? banner.text_color : '#222' }}
    //   >
    // <h1 {...banner.$?.banner_title as {}} className='hero-title'>
    //   {banner.banner_title || <Skeleton />}
    // </h1>

    //     {banner.banner_description ? (
    //       <p
    //         {...banner.$?.banner_description as {}}
    //         className='hero-description'
    //         style={{ color: banner.text_color ? banner.text_color : '#737b7d' }}
    // //       >
    //         {banner.banner_description}
    //       </p>
    //     ) : (
    //       ''
    //     )}
    // {banner.call_to_action.title && banner.call_to_action.href ? (
    //   <Link
    //     {...banner.call_to_action.$?.title}
    //     to={banner.call_to_action.href}
    //     className='btn tertiary-btn'
    //   >
    //     {banner.call_to_action.title}
    //   </Link>
    // ) : (
    //   ''
    // )}
    //   </div>
    //   {banner.banner_image ? (
    //     <img
    //       {...banner.banner_image.$?.url as {}}
    //       alt={banner.banner_image.filename}
    //       src={banner.banner_image.url}
    //     />
    //   ) : (
    //     ''
    //   )}



    // </div>
    <div role="main" className="gitcard-041522 mx-0 px-0 mt-0" id="ae-main-content">
      <div className="container-fluid mx-0 px-0 header-071522 position-relative hero-banner'">
        <picture>
          {banner.banner_image ? (
            <img
              {...banner.banner_image.$?.url as {}}
              alt={banner.banner_image.filename}
              src={banner.banner_image.url}
            />
          ) : (
            ''
          )}
        </picture>

        <div className="content-holder container  header-content" style={{ color: banner.text_color ? banner.text_color : '#222' }}>
          <h1 {...banner.$?.banner_title as {}} className='hero-title'>
            {banner.banner_title || <Skeleton />}
          </h1>

          {banner.banner_description ? (
            <p
              {...banner.$?.banner_description as {}}
              className='text-white text-left text-sub-heandig'
              style={{ color: banner.text_color ? banner.text_color : '#737b7d', textShadow: '2px 2px 8px rgb(0 0 0 / 40%)' }}
            >
              {banner.banner_description}
            </p>
          ) : (
            ''
          )}


          <br role="presentation" aria-hidden="true" />
          <div className="d-flex" style={{ alignItems: 'baseline', gap: '2rem' }}>
           
            {banner.call_to_action.title && banner.call_to_action.href ? (
              <Link
              data-link-info="GC-eGIFT CTA" 
              aria-describedby="audioeye_new_window_message"
                {...banner.call_to_action.$?.title}
                to={banner.call_to_action.href}
                className='btn-mainstyle trackContent checkbalance111219'
              >
                {banner.call_to_action.title}
              </Link>
            ) : (
              ''
            )}
            <div>
              <a className="btn-mainstyle btn-mainstyle-white trackContent reload111219" data-link-info="GC-RELOAD CTA" href="https://olivegarden.wgiftcard.com/responsive_reload/olivegarden_responsive" target="'_blank'" aria-describedby="audioeye_new_window_message">RELOAD
                GIFT CARD</a>
              <span style={{ fontFamily: 'og_brotherlight_italic !important', textShadow: '2px 2px 8px rgb(0 0 0 / 40%)' }} className="text-white d-block mt-3"><i>Not all gift cards are reloadable</i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
