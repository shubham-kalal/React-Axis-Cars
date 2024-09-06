import react from "react";
import { GoArrowUpRight } from "react-icons/go";



const navbutton = {
    background: 'transparent',
    padding:'12px 36px',
    border:".5px solid white",
    fontSize:'14px',
    fontWeight:'300',
    lineHeight:'12.5px',
    display:'flex',
    flexDirection:'collum',
    alignItems:'center',
    textTransform:'capitalize'



};

const Navbtn = ()=>{
    return(
        <>
        <button style={navbutton}>
            <a href="">
                
                contact us
                <GoArrowUpRight />
            </a>
        </button>
        </>
    )
}


export default Navbtn;
