import Advantages from "../Advantages";
import FormOrder from "../FormOrder";
import Price from "../Price";

const BottomPreview = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="p-[25px]">
        <img className="rounded-2xl" src="/images/grill-1.jpg" alt="grill" />
      </div>
      <Price />
      <Advantages />
      <FormOrder />
    </div>
  );
};
export default BottomPreview;
