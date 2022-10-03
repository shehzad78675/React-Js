import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    return(
        <div className="mt-3">
            <h1>Dashboard Page</h1>
            <button onClick={() => navigate("/logout")}>Logout</button>
        </div>
    )
}

export default Dashboard;