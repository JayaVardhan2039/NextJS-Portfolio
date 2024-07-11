"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const resumeURL = "https://drive.google.com/file/d/1890O0upawU2nfvXp5qcG2SujoviwinRL/view?usp=sharing";

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
