"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function PhotoServicesPage() {
  const [mode, setMode] = useState<"book" | "upload">("book");

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-xl px-4">
        <Card>
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Photo Services</CardTitle>
            <CardDescription>
              Professional visa photo services meeting all embassy requirements.
            </CardDescription>
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant={mode === "book" ? "default" : "outline"}
                onClick={() => setMode("book")}
                size="sm"
              >
                Book Session
              </Button>
              <Button
                variant={mode === "upload" ? "default" : "outline"}
                onClick={() => setMode("upload")}
                size="sm"
              >
                Upload Photo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {mode === "book" ? <PhotoServicesForm /> : <PhotoUploadForm />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function PhotoServicesForm() {
  return (
    <form className="space-y-4 mt-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
          Preferred Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="copies">
          Number of Copies
        </label>
        <input
          id="copies"
          name="copies"
          type="number"
          min={1}
          max={10}
          defaultValue={2}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <Button type="submit" className="w-full">
        Book Session
      </Button>
    </form>
  );
}

function PhotoUploadForm() {
  return (
    <form className="space-y-4 mt-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="photo">
          Upload Your Photo
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <p className="text-xs text-gray-500 mt-1">
          Accepted formats: JPG, PNG. Max size: 5MB.
        </p>
      </div>
      <Button type="submit" className="w-full">
        Upload Photo
      </Button>
    </form>
  );
}