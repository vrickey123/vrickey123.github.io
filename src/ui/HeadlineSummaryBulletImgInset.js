import React from 'react';
import { Image } from 'react-bootstrap';

function HeadlineSummaryBulletImgInset(props) {
  const strings = props.items;

  return (
    <div>
        <h3>{props.headline}</h3>
        <p>{props.summary}</p>
        <ul>
            {/* Loop through the array using map() */}
            {strings.map((item, index) => (
                // Assign a unique key to each list item
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
        <Image fluid src={props.img} />
        <h6><a href={props.sourceLink}>{props.source}</a></h6>
        <br></br>
        <br></br>
    </div>
  );
}

export default HeadlineSummaryBulletImgInset;
