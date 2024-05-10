import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    // console.log(news);
    const {_id, title, image_url, thumbnail_ur, details } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16 ">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    details.length > 200 
                    ? <p>{details.slice(0,200)}<Link
                    to={`/news/${_id}`}
                    className="text-blue-600 text-sm font-bold ml-2">Read More...</Link></p>
                    : <p>{details}</p>
                }


            </div>
        </div>
    );
};

export default NewsCard;