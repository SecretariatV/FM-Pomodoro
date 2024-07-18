import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import S from "./index.module.scss";
import Tab from "./Tab";
import { ISettingProps } from "@components/app";
import clsx from "clsx";

const tabData = [
  { label: "pomodoro", value: "pomodoro" },
  { label: "short break", value: "short" },
  { label: "long break", value: "long" },
];

interface IProps {
  setting: ISettingProps;
  setSetting: Dispatch<SetStateAction<ISettingProps>>;
}

const TabBar: FC<IProps> = ({ setting, setSetting }) => {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = tabData.findIndex((data) => data.value === setting.type);

    if (maskRef.current) {
      maskRef.current.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    }
  }, [setting.type]);

  const handleTabChange = (value: string) => {
    setSetting((prevSetting) => ({ ...prevSetting, type: value }));
  };

  return (
    <div className={S.body}>
      <div className={S.body_wrapper}>
        <div
          className={clsx(
            S.mask,
            setting.color === "red"
              ? S.red
              : setting.color === "cyan"
              ? S.cyan
              : S.pink
          )}
          ref={maskRef}
        />
        {tabData.map((data, index) => (
          <Tab
            key={index}
            label={data.label}
            value={data.value}
            active={setting.type === data.value}
            setActive={handleTabChange}
          />
        ))}
      </div>
    </div>
  );
};

export default TabBar;
