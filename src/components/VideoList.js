import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {

    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video = {video}/>)

    return listOfVideos;
}

export default VideoList;