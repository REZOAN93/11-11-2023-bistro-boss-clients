
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center mb-5">
            <p className=" text-center text-[#D99904]">---{heading}--</p>
            <p className=" mx-auto mt-5 w-56 py-2 font-bold border-b-2 border-t-2">{subheading}</p>
        </div>
    );
};

export default SectionTitle;