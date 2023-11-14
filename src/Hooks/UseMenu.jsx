import { useEffect, useState } from "react";

const UseMenu = () => {
    const [menudata, setMenuData] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenuData(data)
                setLoading(false)
            })
    }, [])
    return [menudata,loading]
};

export default UseMenu;