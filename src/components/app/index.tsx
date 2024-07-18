import TabBar from "@components/tab";
import S from "./index.module.scss";
import Clock from "@components/clock";
import { useState } from "react";
import settingIcon from "@assets/setting.svg";
import Modal from "@components/modal";

export interface ISettingProps {
  pomodoro: number;
  short: number;
  long: number;
  type: string;
  font: string;
  color: string;
}

export const PomodoroApp = () => {
  const [settings, setSettings] = useState<ISettingProps>({
    pomodoro: 25,
    short: 5,
    long: 15,
    type: "pomodoro",
    font: "kumbh",
    color: "red",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className={S.body}>
        <span className={S.body_title}>pomodoro</span>
        <TabBar setting={settings} setSetting={setSettings} />
        <Clock setting={settings} />
        <button className={S.body_setting} onClick={handleClick}>
          <img src={settingIcon} alt="Setting Icon" />
        </button>
      </div>
      {openModal && (
        <Modal
          setting={settings}
          setSetting={setSettings}
          setModal={setOpenModal}
        />
      )}
      <input
        type="checkbox"
        name="kumbh"
        id="kumbh"
        checked={settings.font === "kumbh"}
        className={S.input}
        readOnly
      />
      <input
        type="checkbox"
        name="roboto"
        id="roboto"
        checked={settings.font === "roboto"}
        className={S.input}
        readOnly
      />
      <input
        type="checkbox"
        name="space"
        id="space"
        checked={settings.font === "space"}
        className={S.input}
        readOnly
      />
    </>
  );
};
