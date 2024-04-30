import React from "react";
import "../css/PastActivity.css";

function PastActivity() {
    return (
        <div className="activity-container">
            <h1 style={{ fontSize: "30px",width: "100%", textAlign: "center" }}>Past Activity</h1>
            <table className="activity-table">
                <thead>
                    <tr>
                        <th>Mentor</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>4:00 AM</td>
                        <td>Apr 19, 2024</td>
                    </tr>
                        
                    <tr>
                        <td>Jane Doe</td>
                        <td>1:00 PM</td>
                        <td>Apr 20, 2024</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>3:00 PM</td>
                        <td>Apr 23, 2024</td>
                    </tr>
                    <tr>
                        <td>LeBron James</td>
                        <td>2:00 PM</td>
                        <td>Apr 24, 2024</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default PastActivity;
