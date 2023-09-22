import { formatDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Anuj kumar
          </span>
        </h3>
        <p className="text_para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          laudantium non ea voluptate hic eveniet, quod totam, deserunt ducimus
          doloremque sit alias architecto porro pariatur sunt at minus fugit
          vero.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12-04-2010")} - {formatDate("09-04-2015")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className=" text-[14px] leading- 5 font-medium text-textColor">
              Aiims Hospital , Himachal Pradesh
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12-04-2010")} - {formatDate("06-04-2015")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className=" text-[14px] leading- 5 font-medium text-textColor">
              Aiims Hospital , Himachal Pradesh
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2015")} - {formatDate("08-13-2020")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
                Sr.Surgeon

            </p>

            <p className=" text-[14px] leading- 5 font-medium text-textColor">
              Aiims Hospital , Himachal Pradesh
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
