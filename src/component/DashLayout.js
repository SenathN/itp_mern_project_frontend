import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import Footer from "./Footer";

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default DashLayout;