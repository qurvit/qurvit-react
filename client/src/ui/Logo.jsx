import React from "react";

export default function Logo({ className, src, alt }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        title={alt}
        width={60}
        height={60}
        className={`object-fill p-2 ${className}`}
      />
    </div>
  );
}
