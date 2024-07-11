"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const resumeURL = 'https://drive.google.com/uc?export=download&id=1EGcJHGqkM5B04G5HXv-ZjhLrIS_hy_VR';

const DownloadButton = () => {
  const handleDownload = () => {
    window.open(resumeURL, '_blank');
  };

  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
