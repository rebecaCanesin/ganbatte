'use client'

import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const VideoModal: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Video
      </Button>
      <Modal
        open={openModal}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <iframe
          width="100%"
          height="450"
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default VideoModal;
