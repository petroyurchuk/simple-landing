import React from "react";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookPixel from "../FacebookPixel";
import axios from "axios";

const FormOrder = () => {
  const textFail = "Сталося помилка при відправці даних.Спробуйте пізніше";
  const styles = {
    able: "block m-auto min-w-[310px] max-w-[400px] h-[80px] rounded-[40px] shadow-lg shadow-black font-bold text-[20px] leading-[80px] text-[#724b00] uppercase text-center cursor-pointer bg-[#f9c802] transition-all duration-200 hover:tracking-wider mt-[15px]",
  };
  const textSuccess =
    "Дякую за замовлення, очікуйте дзвінка від менеджера для уточнення даних";
  const [nameInput, setNameInput] = React.useState("");
  const [phoneInput, setPhoneInput] = React.useState("");
  const nameInputRef = React.useRef(null);
  const phoneInputRef = React.useRef(null);
  const [state, handleSubmit] = useForm("xleyjpee");
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  React.useEffect(() => {
    if (isButtonClicked) {
      if (state.succeeded && phoneInput && nameInput) {
        axios.post(`https://64f3b6dcedfa0459f6c6c775.mockapi.io/orders`, {
          nameInput,
          phoneInput,
        });
        setNameInput("");
        setPhoneInput("");
        toast.success(textSuccess);

        setIsButtonClicked(false);
      } else if (!state.succeeded && !nameInput && !phoneInput) {
        toast.error(textFail);
        setIsButtonClicked(false);
      }
    }
  }, [isButtonClicked, state.succeeded, nameInput, phoneInput]);

  return (
    <form
      name="форма"
      className="flex justify-center items-center min-h-[400px] flex-col gap-y-6"
      onSubmit={handleSubmit}
    >
      <ToastContainer position="top-center" />
      <div className=" relative flex items-center  border-2 w-[310px] h-[70px] px-2 bg-white">
        <div className="border-r-2">
          <BsFillPersonFill size={20} className="mr-2" />
        </div>
        <input
          id="name"
          ref={nameInputRef}
          name="name"
          type="text"
          placeholder="Введіть ваше ПІБ"
          className="h-full w-full ml-2 outline-none"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div className="flex items-center">
          {nameInput ? (
            <CiCircleRemove
              className="absolute right-4 cursor-pointer"
              onClick={() => {
                setNameInput("");
                nameInputRef.current.focus();
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="relative flex items-center  border-2 w-[310px] h-[70px] px-2 bg-white">
        <div className="border-r-2">
          <BsTelephoneFill size={20} className="mr-2" />
        </div>
        <input
          id="phone"
          ref={phoneInputRef}
          type="tel"
          name="phone"
          placeholder="Введіть ваш телефон"
          className="h-full w-full ml-2 outline-none"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <div className="flex items-center">
          {phoneInput ? (
            <CiCircleRemove
              className="absolute right-4 cursor-pointer"
              onClick={() => {
                setPhoneInput("");
                phoneInputRef.current.focus();
              }}
            />
          ) : null}
        </div>
      </div>
      <button
        className={styles.able}
        type="submit"
        onClick={() => setIsButtonClicked(true)}
        disabled={state.submitting}
      >
        Оформити замовлення
      </button>
      <FacebookPixel
        trackPurchase={isButtonClicked && phoneInput && nameInput}
      />
    </form>
  );
};
export default FormOrder;
