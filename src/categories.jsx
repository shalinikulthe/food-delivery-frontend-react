import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id:1,
        name:"all",
        icons :<TiThSmallOutline className=" w-[60px] h-[60px]  text-green-500" />,
    },
    {
        id:2,
        name:"breakfast",
        icons :<MdOutlineFreeBreakfast className=" w-[60px] h-[60px]  text-green-500" />,
    },
    {
        id:3,
        name:"soups",
        icons:<LuSoup  className=" w-[60px] h-[60px]   text-green-500"/>,
    },
    {
        id:4,
        name:"pasta",
        icons:<CiBowlNoodles className=" w-[60px] h-[60px]  text-green-500"/>,
    },
    {
        id:5,
        name:"main_course",
        icons:<MdOutlineFoodBank className=" w-[60px] h-[60px]  text-green-500"/>,
    },
    {
        id:6,
        name:"pizza",
        icons:<GiFullPizza className=" w-[60px] h-[60px]  text-green-500" />,
    },
    {
        id:7,
        name:"burger",
        icons:<GiHamburger className=" w-[60px] h-[60px]  text-green-500"/>,
    }
]

export default Categories