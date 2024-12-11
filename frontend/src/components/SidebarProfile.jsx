import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarProfile = () => {
  // Ambil data dari localStorage
  const profileData = JSON.parse(localStorage.getItem("profile"));
  
  // Jika profileData tidak ada atau tidak memiliki properti name, gunakan nilai default
  const firstLetter = profileData?.name ? profileData.name.charAt(0).toUpperCase() : "-";
  const navigate = useNavigate();

  const handleNavigateToTransactions = () => {
    navigate("/daftar-transaksi");
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <aside className="w-1/4 space-y-4">
      <div className="bg-[#C62E2E] text-white p-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-[#000000] rounded-full w-8 h-8 flex items-center justify-center">
            {firstLetter}
          </div>
          <span>{profileData?.name || "Guest"}</span>
        </div>
      </div>
      <div
        className="bg-[#F7CDCF] p-4 rounded-lg text-center cursor-pointer"
        onClick={handleNavigateToProfile}
      >
        Akun
      </div>
      <div
        className="bg-[#F7CDCF] p-4 rounded-lg text-center cursor-pointer"
        onClick={handleNavigateToTransactions}
      >
        Daftar Transaksi
      </div>
    </aside>
  );
};

export default SidebarProfile;
