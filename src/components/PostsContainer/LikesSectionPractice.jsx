import React from "react";

const LikesSection = props => {

return (
    <div>
        <div className="like-section"
            key="likes-icon-container"
            >
        <div className="like-section-wrapper">
            <i className="far fa-heart likeIcon" onClick={props.addLike} />
        </div>
        <div className="like-section-wrapper">
            <i className="far fa-comment commentIcon" />
        </div>
<p className="like-number">{props.likes} likes</p>


            </div>


    </div>


);

};

export default LikesSection;