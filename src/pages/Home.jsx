import Banner from "../components/Banner";
import ClientsReviews from "../components/ClientsReviews";
import Companies from "../components/Companies";
import Notification from "../components/Notification";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Companies></Companies>
            <ClientsReviews></ClientsReviews>
            <Notification></Notification>
        </div>
    );
};

export default Home;
