import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar_logo"
        src="sidebarlogo.jpg"
        alt="spotify icon"
      />
      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />

      <strong className='sidebar_title'>PLAYLISTS</strong>

      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
        ))}
    </div>
  );
}

export default Sidebar;
