import { FaTiktok, FaYoutube, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bottom-2.5 flex justify-center items-center text-xs py-4">
      <div className="flex flex-col space-y-1">
        <div className="flex flex-row space-x-1 justify-center">
          <a href="https://www.youtube.com/@SproutCircle" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-full flex items-center justify-center w-10 h-10">
            <FaYoutube size={24} className="text-gray-600" />
          </a>
          <a href="https://www.tiktok.com/@sproutcircle" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-full flex items-center justify-center w-10 h-10">
            <FaTiktok size={21} className="text-gray-600" />
          </a>
        </div>
        <p>&copy; 2024 SproutCircle - All rights reserved.</p>
      </div>
    </footer>
  );
}