import { useEffect, useState } from "react";
import { TbFileDownload } from "react-icons/tb";

const DownloadButton = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdfUrl = async () => {
      const response = await fetch("/CV.pdf");
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    };

    fetchPdfUrl();

    // Clean up the URL object when the component is unmounted
    return () => {
      URL.revokeObjectURL(pdfUrl);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Gleb-Kharlamov-CV.pdf";
    link.click();
  };

  return (
    <button
      className="flex items-center justify-center w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold"
      onClick={handleDownload}
    >
      <span className="mx-1 font-light text-3xl font-game">CV</span>
      <TbFileDownload className="mt-1 text-2xl text-red-500" />
    </button>
  );
};

export default DownloadButton;
