import { useEffect, useState } from "react";

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
      className="w-28 h-12 bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg hover:border-2 hover:border-red-300 hover:shadow-red-700 font-bold"
      onClick={handleDownload}
    >
      CV
    </button>
  );
};

export default DownloadButton;
