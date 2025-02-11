"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const HeroInput = () => {
  const [logoTitle, setLogoTitle] = useState("");
  const handleChange = (event) => {
    setLogoTitle(event.target.value);
    console.log(logoTitle);
  };
  return (
    <div className="flex gap-2 items-center">
      <input
        className="sm:w-[300px] p-3 rounded-lg text-lg sm:text-2xl "
        value={logoTitle}
        placeholder="Enter Your Logo Name Here"
        onChange={handleChange}
      />
      <div>
        <Link href={`/logoName?title=${encodeURIComponent(logoTitle)}`}>
          <Button className="bg-[#4e8e20] hover:bg-[#3c661d] " >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroInput;
