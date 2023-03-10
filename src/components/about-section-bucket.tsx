import React from 'react';
import parse from 'html-react-parser';
import { BucketProps, Bucket } from "../typescript/about-section-bucket";
import { Link } from 'react-router-dom';


export default function AboutSectionBucket({ sectionWithBuckets }: { sectionWithBuckets: BucketProps }) {

  function bucketContent(bucket: Bucket, index: number) {
    console.log(bucket);
    return (
      // <div classNameName='mission-content-section' key={index}>
      //   

      //   <div classNameName='mission-section-content'>{bucket.icon && <img {...bucket.icon.$?.url as {}} classNameName='mission-icon' src={bucket.icon.url} alt='art work' />}
      //     {bucket.title_h3 && <h3 {...bucket.$?.title_h3 as {}}>{bucket.title_h3}</h3>}
      //     <div {...bucket.$?.description as {}}> {bucket.description && parse(bucket.description)}</div>
      //     {bucket?.call_to_action.title ? (
      //       <Link 
      //       classNameName="btn-mainstyle trackContent px-4" 
      //       data-link-info="GC-eGIFT CTA" 
      //       rel="noreferrer" target="_blank" aria-describedby="audioeye_new_window_message" to={bucket.call_to_action.href ? bucket.call_to_action.href : '#'} {...bucket.call_to_action.$?.title}>
      //         {`${bucket.call_to_action.title}`}
      //       </Link>
      //     ) : (
      //       ''
      //     )}
      //   </div>

      // </div>
        <div className="col-12 col-md-4" key={index}>
        {bucket.icon && <img className="icon" width="61" height="53" alt="Large Bulk Olive Garden Restaurant Gift Cards" {...bucket.icon.$?.url as {}} src={bucket.icon.url} />}
        {bucket.title_h3 && <h2 className="mt-4 mb-3" {...bucket.$?.title_h3 as {}}>{bucket.title_h3}</h2>}
        <p  {...bucket.$?.description as {}}> {bucket.description && parse(bucket.description)}</p>
        <Link 
            className="btn-redboderstyle trackContent" 
            data-link-info="GC-LARGER ORDERS CTA" rel="noreferrer" target="_blank" aria-describedby="audioeye_new_window_message" to={bucket.call_to_action.href ? bucket.call_to_action.href : '#'} {...bucket.call_to_action.$?.title}>
              {`${bucket.call_to_action.title}`}
            </Link>
        </div>

    );
  }

  return (
    <div className="container">
      <div className="row p-4 pt-5 pb-5 options gitcard-wrapper-041522" >
      <div className='member-head'>{sectionWithBuckets.title_h2 && <h2 className='mb-4' {...sectionWithBuckets.$?.title_h2 as {}}>{sectionWithBuckets.title_h2}</h2>}</div>
      <div className='mission-section'>
        <div className='mission-content-top'>{sectionWithBuckets.buckets.map((bucket, index: number) => index < 3 && bucketContent(bucket, index))}
        </div>
      </div>

    </div>
    </div>
  );
}
