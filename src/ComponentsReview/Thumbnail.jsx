import React from 'react';
import PropTypes from 'prop-types';
import poster from './../ImagesReview/tarzan.png';

function Thumbnail(props){
return(
    <div>
<img src={props.poster} alt='film poster' class='thumbnail'></img>
</div>
);
};

export {Thumbnail};