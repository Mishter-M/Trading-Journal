"use client";

import { useRef } from "react";

interface CSVUploadProps {
  onFileLoaded: (csvText: string, fileName: string) => void;
  fileName: string | null;
}

export default function CSVUpload({ onFileLoaded, fileName }: CSVUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      onFileLoaded(text, file.name);
    };
    reader.onerror = () => alert("Error reading file. Please try again.");
    reader.readAsText(file);
  }

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <label
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer bg-[#18181b] text-[#e4e4e7] px-9 py-3.5 rounded-lg font-medium text-[0.95rem] inline-flex items-center gap-2.5 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-[#27272a] hover:border-white/20 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] active:translate-y-0 transition-all"
      >
        <span>📁</span> Upload CSV File
      </label>
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
      />
      {fileName && (
        <span className="text-emerald-500 text-sm font-medium">
          ✓ Loaded: {fileName}
        </span>
      )}
      {!fileName && (
        <span className="text-amber-400 text-sm">
          ⚠️ Please upload a CSV file to get started
        </span>
      )}
    </div>
  );
}
