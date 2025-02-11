"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { heroSectionData } from "@/app/utils/Data";


export default function LogoTitle() {
  const searchParams = useSearchParams();
  const name = searchParams.get("title");
  const [logoName, setLogoName] = useState("");

  if (!name) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Link href="/">
          <Button
            variant="ghost"
            className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Go back</span>
          </Button>
        </Link>
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <p className="text-xl text-gray-600">No logo name provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12 space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Your Logo Title
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {heroSectionData.subHeadingText}
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold capitalize">
              {decodeURIComponent(name)}
            </p>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="logoName"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your logo name
            </label>
            <input
              id="logoName"
              type="text"
              value={logoName}
              onChange={(e) => setLogoName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800 placeholder-gray-400"
              placeholder="Type your logo name here..."
            />
          </div>

          <div className="pt-4 flex justify-between items-center gap-4">
            <Link href="/">
            <Button 
              variant="outline" 
              className="min-w-[100px]"
            >
             <ArrowLeft /> Previous
            </Button>
            </Link>
            <Link
              href="/[logoName]/color"
              as={`/${name}/color`}
              className="flex-1"
            >
              <Button
                variant="default"
                className="w-1/2 px-1"
              >
                Continue<ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}