import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "flowbite-react";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center h-screen flex items-center justify-center h-70-screen">
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;
