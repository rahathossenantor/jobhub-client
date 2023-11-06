
const companiesData = [
    {
        "id": 1,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/google.svg"
    },
    {
        "id": 2,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/dropbox.svg"
    },
    {
        "id": 3,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/airbnb.svg"
    },
    {
        "id": 4,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/hubspot.svg"
    },
    {
        "id": 5,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/fedex.svg"
    },
    {
        "id": 6,
        "img": "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/wallmart.svg"
    }
];

const Companies = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    companiesData?.map(company => <div key={company?.id} className="flex items-center justify-center rounded-xl border px-7 py-9 shadow-lg">
                        <img src={company?.img} className="inline-block" alt="company-logo" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Companies;
