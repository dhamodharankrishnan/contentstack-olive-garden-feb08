import React from 'react';
import { Link } from 'react-router-dom';
//import parse from 'html-react-parser';
import { BucketProps } from "../typescript/section";

export default function SectionBucket({ section }: { section: BucketProps }) {

  return (
    // <div classNameName='member-main-section'>
    //   <div classNameName='member-head'>
    //     {section.title_h2 && <h2 {...section.$?.title_h2 as {}}>{section.title_h2}</h2>}
    //     {section.description && <p {...section.$?.description as {}}>{section.description}</p>}
    //   </div>
    //   <div classNameName='member-section'>
    //     {section.buckets?.map((bucket) => (
    //       <div classNameName='content-section' key={bucket.title_h3} {...bucket.$?.description as {}}>
    //         {bucket.icon && <img {...bucket.icon.$?.url as {}} src={bucket.icon.url} alt='bucket icon' />}

    //         {bucket.title_h3 ? <h3 {...bucket.$?.title_h3 as {}}>{bucket.title_h3}</h3> : ''}
    //         <div {...bucket.$?.description as {}}> {bucket.description && parse(bucket.description)}</div>
    //         {bucket.call_to_action.title ? (
    //           <Link to={bucket.call_to_action.href ? bucket.call_to_action.href : '#'} {...bucket.call_to_action.$?.title}>
    //             {`${bucket.call_to_action.title} -->`}
    //           </Link>
    //         ) : (
    //           ''
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <div className="container">
      {section.title_h2 && <h2 {...section.$?.title_h2 as {}} className="text-center text-uppercase text-uppercase text-brown sub-heading"> {section.title_h2}</h2>}
      <div className="gitcard-wrapper-041522">
        <div className="row p-4 cards-options">
          {section.buckets?.map((bucket, index) => (
            <div className="col-md-6 col-12 position-relative" key={index}>
              {bucket.icon && <img className="full-size" width="380" height="459" {...bucket.icon.$?.url as {}} src={bucket.icon.url} alt='Digital Olive Garden Restaurant Gift Cards - Send by mail' />}

              <div className="content-holder1">
                {bucket.title_h3 ? <h2 className="text-white mb-4" {...bucket.$?.title_h3 as {}}>{bucket.title_h3}</h2> : ''}
                {bucket.call_to_action.title ? (
                  <Link className="btn-mainstyle trackContent px-4" data-link-info="GC-eGIFT CTA" rel="noreferrer" target="_blank" aria-describedby="audioeye_new_window_message" to={bucket.call_to_action.href ? bucket.call_to_action.href : '#'} {...bucket.call_to_action.$?.title}>
                    {`${bucket.call_to_action.title}`}
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}