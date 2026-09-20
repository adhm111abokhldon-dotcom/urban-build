"use client"

import { useState } from "react";
import {RiSubtractFill,RiAddFill} from "react-icons/ri"
const FaqItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border-b">
      <div>
        <h4>{title}</h4>
        <button>btn</button>
      </div>
  </div>
  )
};

export default FaqItem;
