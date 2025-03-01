import "./../css/Landing_Page.css"

function LandingPage () {
    return (
        <div className="lp">
            <div className="lp-title">
                Welcome to your Health Care Portal
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <div className="lp-button">
                    Button 1
                </div>
                <div className="lp-button">
                    Button 2
                </div>
            </div>
            
        </div>
        
    )
}

export default LandingPage;