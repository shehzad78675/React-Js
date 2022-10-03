import { useEffect, useState } from "react";
const lap = [];
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);
  const [isPause, setIsPause] = useState(true);
  const [isActive, setIsActive] = useState(false);

  // const removeInterval = () => {
  //     clearInterval(interval);
  // }

  useEffect(() => {
    let interval = null;
    if (isActive && isPause === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPause, isActive]);

  const handleStart = () => {
    setIsPause(false);
    setIsActive(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setPreviousTime(0);
    lap.splice(0, lap.length);
  };

  const takeLapRecord = (time, timeDifference) => {
    lap.unshift({
      time,
      timeDifference,
    });
  };

  return (
    <>
      <div style={{marginTop: 30}}>{` ${
        Math.floor(time / 1000 / 60) % 60 <= 9
          ? "0" + (Math.floor(time / 1000 / 60) % 60)
          : Math.floor(time / 1000 / 60) % 60
      } : ${
        Math.floor((time / 1000) % 60) <= 9
          ? "0" + Math.floor((time / 1000) % 60)
          : Math.floor((time / 1000) % 60)
      } : ${
        Math.floor((time % 1000) / 10) <= 9
          ? "0" + Math.floor((time % 1000) / 10)
          : Math.floor((time % 1000) / 10)
      } `}</div>
      {isActive ? (
        <div style={{marginTop: 20}}>
          <button onClick={handleReset} style={{marginRight: 10}} disabled={!isPause}>Reset</button>
          <button onClick={() => setIsPause(!isPause)} style={{marginRight: 10}}>
            {isPause ? "Resume" : "Pause"}
          </button>
          <button
            onClick={() => {
              takeLapRecord(
                ` ${
                  Math.floor(time / 1000 / 60) % 60 <= 9
                    ? "0" + (Math.floor(time / 1000 / 60) % 60)
                    : Math.floor(time / 1000 / 60) % 60
                } : ${
                  Math.floor((time / 1000) % 60) <= 9
                    ? "0" + Math.floor((time / 1000) % 60)
                    : Math.floor((time / 1000) % 60)
                } : ${
                  Math.floor((time % 1000) / 10) <= 9
                    ? "0" + Math.floor((time % 1000) / 10)
                    : Math.floor((time % 1000) / 10)
                } `,
                (time - previousTime)
              );
              setPreviousTime(time)
            }}

            disabled={isPause}
          >
            Lap
          </button>
        </div>
      ) : (
        <button onClick={handleStart} style={{marginTop: 20}}>Start</button>
      )}
      {lap.map((lapTime, index) => (
        <div key={index} style={{marginTop: 10}}>
          <span style={{ marginRight: 30 }}>
            {lap.length - index <= 9
              ? `0${lap.length - index}.`
              : lap.length - index + "."}
          </span>
          <span style={{ marginRight: 30 }}>{` ${
            Math.floor(lapTime.timeDifference / 1000 / 60) % 60 <= 9
              ? "0" + (Math.floor(lapTime.timeDifference / 1000 / 60) % 60)
              : Math.floor(lapTime.timeDifference / 1000 / 60) % 60
          } : ${
            Math.floor((lapTime.timeDifference / 1000) % 60) <= 9
              ? "0" + Math.floor((lapTime.timeDifference / 1000) % 60)
              : Math.floor((lapTime.timeDifference / 1000) % 60)
          } : ${
            Math.floor((lapTime.timeDifference % 1000) / 10) <= 9
              ? "0" + Math.floor((lapTime.timeDifference % 1000) / 10)
              : Math.floor((lapTime.timeDifference % 1000) / 10)
          } `}</span>
          {lapTime.time}
        </div>
      ))}
    </>
  );
};

export default StopWatch;
