import JoditEditor from "jodit-pro-react";
import React, { useRef, useState } from "react";

const Example = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Important: Use base64 for images
      insertFileAsBase64URI: true, // Important: Use base64 for files
      processImage: false, // Prevents Jodit from processing images (optional)
      processVideo: false, // Prevents Jodit from processing videos (optional)
      processAudio: false, // Prevents Jodit from processing audio (optional)
      processFiles: false, //Prevents Jodit from processing files(optional)
    },
    filebrowser: false, // Disable file browser if not needed
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => {}}
    />
  );
};

export default Example;
