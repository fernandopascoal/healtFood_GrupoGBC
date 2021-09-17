import React from "react";
import './styles/footer.css'

function Footer() {


    return(
        <footer className="footer">
            <div className="copy">
                <p>	&copy; Copyriths 2019 Stake. All Rights Reserved.</p>
            </div>
            <div className="terms">
                <a href="" className="terms-link">Privacy Policy</a>
                <a href="" className="terms-link">Terms and Conditions</a>
            </div>
        </footer>
    )
}

export default Footer