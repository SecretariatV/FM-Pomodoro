import { FC } from "react";
import S from "./Tab.module.scss";
import clsx from "clsx";

interface IProps {
  active: boolean;
  setActive: (value: string) => void;
  label: string;
  value: string;
}

const Tab: FC<IProps> = ({ active, setActive, label, value }) => {
  const handleSelect = () => {
    setActive(value);
  };

  return (
    <>
      <input
        type="radio"
        className={S.radio}
        name={value}
        checked={active}
        onChange={handleSelect}
      />
      <label
        htmlFor={value}
        onClick={handleSelect}
        className={clsx(S.label, active && S.active)}
      >
        {label}
      </label>
    </>
  );
};

export default Tab;
