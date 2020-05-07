import React, { useState }from "react";

const Copyright = () => {
    const [date] = useState(new Date());

    return <div className="copyright" id="foot">Fundacja FEJK {date.getFullYear()}r.</div>
}

export default Copyright;