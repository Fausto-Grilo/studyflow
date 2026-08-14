"use client";

export default function AnimatedLogo() {
  const text = "StudyFlow";

  return (
    <div className="flex text-xl font-bold tracking-tight">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="logo-letter"
          style={{
            animationDelay: `${index * 0.08}s`,
          }}
        >
          {letter}
        </span>
      ))}

      <span className="cursor ml-1">_</span>
    </div>
  );
}