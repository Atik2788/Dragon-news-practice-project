import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary mr-1">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <h1 className="mr-10">Lorem ipsum dolor sit inventore alias hic officiis.....</h1>
                <h1 className="mr-10">Lorem ipsum dolor sit inventore alias hic officiis.....</h1>
                <h1 className="mr-10">Lorem ipsum dolor sit inventore alias hic officiis.....</h1>
            </Marquee>
        </div>
    );
};

export default BreakingNews;