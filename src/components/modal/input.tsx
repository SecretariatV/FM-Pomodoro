import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import S from "./input.module.scss";
import { ISettingProps } from "@components/app";
import upIcon from "@assets/up.svg";
import downIcon from "@assets/down.svg";
import upHoverIcon from "@assets/uphover.svg";
import downHoverIcon from "@assets/downhover.svg";

interface IProps {
  value: string;
  name: string;
  setting: ISettingProps;
  setSetting: Dispatch<SetStateAction<ISettingProps>>;
}

const Input: FC<IProps> = ({ name, setting, setSetting, value }) => {
  const handleClick = (count: number) => {
    const time = (setting[value as keyof ISettingProps] as number) + count;
    if (time > 0 && time < 60) {
      setSetting((prevSetting) => ({ ...prevSetting, [value]: time }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tempValue = Number(e.target.value) < 60 ? e.target.value : 59;
    if (e.target.value)
      setSetting((prevSetting) => ({ ...prevSetting, [value]: tempValue }));
  };

  return (
    <label htmlFor={name}>
      {name}
      <div className={S.input}>
        <input
          type="number"
          name={name}
          value={setting[value as keyof ISettingProps]}
          max={59}
          className={S.input_number}
          onChange={handleChange}
        />
        <div className={S.input_control}>
          <button
            className={S.input_control_btn}
            onClick={() => handleClick(1)}
          >
            <img
              src={upHoverIcon}
              alt="Up Hover Icon"
              className={S.input_control_btn_hover}
            />
            <img
              src={upIcon}
              alt="Up Icon"
              className={S.input_control_btn_nomal}
            />
          </button>
          <button
            className={S.input_control_btn}
            onClick={() => handleClick(-1)}
          >
            <img
              src={downHoverIcon}
              alt="Down Hover Icon"
              className={S.input_control_btn_hover}
            />
            <img
              src={downIcon}
              alt="Down Icon"
              className={S.input_control_btn_nomal}
            />
          </button>
        </div>
      </div>
    </label>
  );
};

export default Input;
