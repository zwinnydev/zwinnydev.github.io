import { Talk } from "#site/content";
import React from "react";

const TalkVideo = ({content: {videoLink}}: {content: Talk}) => {
    return videoLink && <div className="mt-4 flex space-x-4">
        <iframe width="720" height="405" src={videoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media gyroscope; picture-in-picture"></iframe>
    </div>
}

export default TalkVideo