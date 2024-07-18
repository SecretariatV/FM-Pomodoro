import { FC, useEffect, useLayoutEffect, useState } from "react";
import S from "./index.module.scss";
import { ISettingProps } from "@components/app";
import { formatNumberToTimer } from "@utils/formatUtils";

interface IProps {
  setting: ISettingProps;
}

const Clock: FC<IProps> = ({ setting }) => {
  const [time, setTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [step, setStep] = useState<string>("start");

  useLayoutEffect(() => {
    const tempTime =
      (setting[setting.type as keyof ISettingProps] as number) * 60;
    setTime(tempTime);
    setTotalTime(tempTime);
    setStep("start");
  }, [setting]);

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }

    let interval: NodeJS.Timeout;

    if (step === "pause") {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setStep("restart");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      setTimer(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [step]);

  const handleClick = () => {
    if (step === "start") {
      setStep("pause");
    } else if (step === "pause" || step === "restart") {
      setStep("start");
    }

    if (step === "restart") {
      setTime(totalTime);
    }
  };

  const radius = 164;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (circumference * time) / totalTime - circumference;

  return (
    <div className={S.body}>
      <div className={S.body_wrapper}>
        <svg>
          <circle
            cx="169.5"
            cy="169.5"
            r="164"
            strokeWidth={11}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={
              isNaN(strokeDashoffset) ? "0" : strokeDashoffset.toString()
            }
            className={
              setting.color === "red"
                ? S.red
                : setting.color === "cyan"
                ? S.cyan
                : S.pink
            }
          />
        </svg>
      </div>
      <span className={S.body_timer}>{formatNumberToTimer(time)}</span>
      <button className={S.body_btn} onClick={handleClick}>
        <span>{step}</span>
      </button>
    </div>
  );
};

export default Clock;
