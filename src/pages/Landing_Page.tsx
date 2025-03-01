import { useState } from "react";
import "./../css/Landing_Page.css"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

function LandingPage () {
    const [button1Click, setbutton1Click] = useState<boolean>(false);
    const [hcp, sethcp] = useState<string>("");

    function handleChange (event: SelectChangeEvent) {
        sethcp(event.target.value as string);
    }

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
            <div>
                <FormControl style={{width: '5rem'}}>
                    <InputLabel></InputLabel>
                    <Select
                    value={hcp}
                    label=""
                    onChange={handleChange}
                    >
                        <MenuItem value={"1"}>One</MenuItem>
                        <MenuItem value={"2"}>Two</MenuItem>
                        <MenuItem value={"3"}>Three</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        
    )
}

export default LandingPage;