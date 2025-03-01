import { use, useState } from "react";
import "./../css/Landing_Page.css"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

function LandingPage () {
    const [button1Click, setbutton1Click] = useState<boolean>(false);
    const [button2Click, setbutton2Click] = useState<boolean>(false);
    const [hcp, sethcp] = useState<string>("");
    const [hcpInRange, sethcpInRange] = useState<string[]>(["test1", "test2"]);

    function handleChange (event: SelectChangeEvent) {
        sethcp(event.target.value as string);
    }

    return (
        <div className="lp">
            <div className="lp-title">
                Welcome to your Health Care Portal
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <div onClick={() => setbutton1Click(!button1Click)} className="lp-button">
                    Button 1
                </div>
                <div onClick={() => setbutton2Click(!button2Click)} className="lp-button">
                    Button 2
                </div>
            </div>
            {button1Click && <div>
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
            </div>}
            {button2Click && <div>
                {hcpInRange.map((hc: string) => 
                    <div>
                        {hc}
                    </div>
                )}
            </div>}
        </div>
        
    )
}

export default LandingPage;