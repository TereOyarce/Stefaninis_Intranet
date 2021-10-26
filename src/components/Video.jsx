import '../../node_modules/react-modal-video/scss/modal-video.scss';
import React, { useState } from "react";
import ModalVideo from "react-modal-video";


const Video = ({ ytId }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={ytId}
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        Abrir
      </button>
    </React.Fragment>
  );
};

export default Video;