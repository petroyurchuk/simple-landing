import React from "react";

const VideoView = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const returnPreview = () => {
    return isClicked ? (
      <video controls width="500">
        <source src="/video/view.mp4" type="video/mp4" />
        Ваш браузер не підтримує відтворення відео.
      </video>
    ) : (
      <img
        src="/images/bg-preview.jpg"
        className="cursor-pointer"
        alt="preview "
        onClick={() => setIsClicked(true)}
      />
    );
  };
  return <div>{returnPreview()}</div>;
};
export default VideoView;
