import React from 'react';
import { Link } from 'react-router-dom';
import { SectionProps } from "../typescript/section";

export default function Section({ section }: {section : SectionProps}) {

  function contentSection() {
    return (
      // <div classNameName='home-content' key='section-1'>
      //   {section.title_h2 && <h2 {...section.$?.title_h2 as {}}>{section.title_h2}</h2>}
      //   {section.description && <p {...section.$?.description as {}}>{section.description}</p>}
      //   {section.call_to_action.title && section.call_to_action.href ? (
      //     <Link {...section.call_to_action.$?.title} to={section.call_to_action.href} classNameName='btn secondary-btn'>
      //       {section.call_to_action.title}
      //     </Link>
      //   ) : (
      //     ''
      //   )}
      // </div>
      
        <div className="content-holder3" style={{flexDirection: 'column', display: 'flex'}}>
        {section.title_h2 && <h2 className="text-white mb-4" {...section.$?.title_h2 as {}}>{section.title_h2}</h2>}
        {section.description && <p className="text-white text-contact mb-3" {...section.$?.description as {}}>{section.description}</p>}
        {section.call_to_action.title && section.call_to_action.href ? (
          <Link style={{margin: '0 auto'}} {...section.call_to_action.$?.title} to={section.call_to_action.href} className='btn-mainstyle trackContent text-uppercase' data-link-info="GC-STATUS CTA">
            {section.call_to_action.title}
          </Link>
        ) : (
          ''
        )}
        </div>

    );
  }

  function imageContent() {
    return <img className="full-size" width="960" height="265" style={{height: '100%'}} {...section.image.$?.url as {}} src={section.image.url} alt={section.image.filename} key='section-2' />;
  }
  return <div className="container">
  <div className="row image-holder">
    {section.image_alignment === 'Left' ? [imageContent(), contentSection()] : [contentSection(), imageContent()]}
    </div></div>;
}
