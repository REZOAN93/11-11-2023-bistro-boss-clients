
const Cover = ({bgImg,menuTitle,menuDescription}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div style={{background: 'rgba(21, 21, 21, 0.60)'}} className="w-full px-96 py-20">
                    <h1 className="mb-5 text-5xl font-bold">{menuTitle}</h1>
                    <p className="mb-5">{menuDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;