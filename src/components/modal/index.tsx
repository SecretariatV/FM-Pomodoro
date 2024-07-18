import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import S from "./index.module.scss";
import closeIcon from "@assets/close.svg";
import { ISettingProps } from "@components/app";
import Input from "./input";
import clsx from "clsx";
import checkIcon from "@assets/check.svg";

interface IProps {
  setting: ISettingProps;
  setSetting: Dispatch<SetStateAction<ISettingProps>>;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const inputList = [
  {
    name: "pomodoro",
    value: "pomodoro",
  },
  {
    name: "short break",
    value: "short",
  },
  {
    name: "long break",
    value: "long",
  },
];

const Modal: FC<IProps> = ({ setting, setSetting, setModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
    }
  }, [modalRef]);

  const handleClick = (type: string) => {
    setSetting((prevSetting) => ({ ...prevSetting, font: type }));
  };

  const handleClickColor = (color: string) => {
    setSetting((prevSetting) => ({ ...prevSetting, color }));
  };

  return (
    <div className={S.body}>
      <div className={S.modal} ref={modalRef}>
        <div className={S.modal_header}>
          <span className={S.modal_header_title}>Settings</span>
          <button className={S.modal_header_close}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className={S.modal_body}>
          <div className={S.modal_body_timesetting}>
            <span className={S.modal_body_timesetting_title}>
              time (minutes)
            </span>
            <div className={S.modal_body_timesetting_group}>
              {inputList.map((data, index) => (
                <Input
                  key={index}
                  name={data.name}
                  value={data.value}
                  setting={setting}
                  setSetting={setSetting}
                />
              ))}
            </div>
          </div>
          <div className={S.modal_board} />
          <div className={S.modal_body_fontsetting}>
            <span className={S.modal_body_fontsetting_title}>font</span>
            <div className={S.modal_body_fontsetting_group}>
              <button
                className={clsx(
                  S.modal_body_fontsetting_group_btn,
                  setting.font === "kumbh" && S.active
                )}
                onClick={() => handleClick("kumbh")}
              >
                <span className="kumbh bold">Aa</span>
              </button>
              <button
                className={clsx(
                  S.modal_body_fontsetting_group_btn,
                  setting.font === "roboto" && S.active
                )}
                onClick={() => handleClick("roboto")}
              >
                <span className="roboto regular">Aa</span>
              </button>
              <button
                className={clsx(
                  S.modal_body_fontsetting_group_btn,
                  setting.font === "space" && S.active
                )}
                onClick={() => handleClick("space")}
              >
                <span className="space bold">Aa</span>
              </button>
            </div>
          </div>
          <div className={S.modal_board} />
          <div className={S.modal_body_colorsetting}>
            <span className={S.modal_body_colorsetting_title}>color</span>
            <div className={S.modal_body_colorsetting_group}>
              <button
                className={clsx(
                  S.modal_body_colorsetting_group_btn,
                  "red",
                  S.color
                )}
                onClick={() => handleClickColor("red")}
              >
                <img
                  src={checkIcon}
                  alt="check icon"
                  className={clsx(
                    S.modal_body_check,
                    setting.color === "red" && S.active
                  )}
                />
              </button>
              <button
                className={clsx(
                  S.modal_body_colorsetting_group_btn,
                  "cyan",
                  S.color
                )}
                onClick={() => handleClickColor("cyan")}
              >
                <img
                  src={checkIcon}
                  alt="check icon"
                  className={clsx(
                    S.modal_body_check,
                    setting.color === "cyan" && S.active
                  )}
                />
              </button>
              <button
                className={clsx(
                  S.modal_body_colorsetting_group_btn,
                  "pink",
                  S.color
                )}
                onClick={() => handleClickColor("pink")}
              >
                <img
                  src={checkIcon}
                  alt="check icon"
                  className={clsx(
                    S.modal_body_check,
                    setting.color === "pink" && S.active
                  )}
                />
              </button>
            </div>
          </div>
          <button
            className={S.modal_body_apply}
            onClick={() => setModal(false)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
