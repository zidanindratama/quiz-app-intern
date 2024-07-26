"use client";

import React, { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <p className="font-bold text-3xl mt-12">
        Time Left:{" "}
        <span className="text-red-600">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </p>
    </div>
  );
};

export default Timer;
