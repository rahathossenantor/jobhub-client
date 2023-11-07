import { Rating } from "flowbite-react";

const reviewsData = [
    {
        "id": 1,
        "name": "Katy Perry",
        "position": "Visual Designer",
        "description": "We are on the hunt for a designer who is exceptional in both making incredible product interfaces as well as",
        "image": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/about/profile.png"
    },
    {
        "id": 2,
        "name": "David Smith",
        "position": "Web Developer",
        "description": "We are on the hunt for a designer who is exceptional in both making incredible product interfaces as well as",
        "image": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/about/profile3.png"
    },
    {
        "id": 3,
        "name": "Cris Brown",
        "position": "Graphic Designer",
        "description": "We are on the hunt for a designer who is exceptional in both making incredible product interfaces as well as",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client2.png"
    },
    {
        "id": 4,
        "name": "Marry",
        "position": "Softwere Developer",
        "description": "We are on the hunt for a designer who is exceptional in both making incredible product interfaces as well as",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client3.png"
    }
];

const ClientsReviews = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20">
            <div className="text-center">
                <h2 className="text-5xl font-semibold mb-2">Our Happy Customer</h2>
                <p className="text-lg mb-5">When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.</p>
            </div>

            <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    reviewsData.map(review => <div key={review.id} className="border rounded-xl shadow-xl flex items-center justify-center p-5 gap-5">
                        <div className="text-center">
                            <img src={review.image} className="inline-block mb-2 w-20 h-20 rounded-full" alt="client" />
                            <div>
                                <p>{review.description}</p>
                                <div className="flex items-center justify-center my-1">
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                </div>
                                <h4 className="text-lg font-semibold">{review.name}</h4>
                                <p>{review.position}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClientsReviews;
