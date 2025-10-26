import LogIn from "../../assets/icons/log-in.svg?react";
import SearchField from "../elements/search-field/SearchField";

interface Props {
  isMessageVisible: boolean;
}

function Header({ isMessageVisible }: Props) {

  return (
    <div className={`${isMessageVisible ? "mt-[70px]" : "mt-5"} flex justify-between items-center gap-10 mb-15 avg:mb-20 mx-5 xl:mx-25`}>
      <div className="flex-1 flex-col gap-2 justify-between w-[220px] flex avg:flex-row avg:items-center avg:justify-between avg:w-[60%]">
        <div className="flex items-end">
          <a className="block shrink-0" href="https://www.vl.ru/"><img className="w-[115px] h-auto" src="logo.svg" /></a>
          <a className="flex flex-col text-[18px] text-primary hover:text-primary-hover" href="#">
            <div>
              Отключение
              <span className="hidden sm:inline"> воды и света</span>
            </div>
            <span className="text-[12px] text-black">Владивостока</span>
          </a>
        </div>
        <SearchField />
      </div>
      <div>
        <a className="flex gap-[5px] text-btn hover:text-btn-hover" href="#">
          войти
          <LogIn />
        </a>
      </div>
    </div>
  );
}

export default Header;