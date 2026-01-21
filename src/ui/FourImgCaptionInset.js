import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

function FourImgCaptionInset(props) {
  return (
    <Row>
        <Col xs={12} sm={6}>
            <Image className="object-fit-scale-down" src={props.imgOneSrc} rounded/>
            <h4 className="text-center">{props.captionOne}</h4>
        </Col>
        <Col xs={12} sm={6}>
            <Image className="object-fit-scale-down"  src={props.imgTwoSrc} rounded/>
            <h4 className="text-center">{props.captionTwo}</h4>
        </Col>
        <Col xs={12} sm={6}>
            <Image className="object-fit-scale-down"  src={props.imgThreeSrc} rounded/>
            <h4 className="text-center">{props.captionThree}</h4>
        </Col>
        <Col xs={12} sm={6}>
            <Image className="object-fit-scale-down"  src={props.imgFourSrc} rounded/>
            <h4 className="text-center">{props.captionFour}</h4>
        </Col>
    </Row>
  );
}

export default FourImgCaptionInset;