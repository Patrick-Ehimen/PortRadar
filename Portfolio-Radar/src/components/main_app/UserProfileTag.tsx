import { useState } from "react";
import { DefaultAvatar } from "../../assets";

const UserProfileTag = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <img
        src={DefaultAvatar}
        className={` ${isExpanded ? "px-[20px] py-[200px]" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      />
      <p className="p-[20px]">0xOse</p>
    </div>
  );
};

export default UserProfileTag;
