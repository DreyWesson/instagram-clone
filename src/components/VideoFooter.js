import { Avatar, Button } from "@material-ui/core";
import {
  Favorite,
  FavoriteBorderOutlined,
  ModeComment,
  ModeCommentOutlined,
  MoreHorizOutlined,
  MusicNote,
  SendOutlined,
} from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ channel, avatarSrc, song, url, likes, shares }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteBorderOutlined />
          <ModeCommentOutlined />
          <SendOutlined />
          <MoreHorizOutlined />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
