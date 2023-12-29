import { ThemeProvider } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Avatar } from '@chakra-ui/react'
import parse from 'html-react-parser';
import { FaCalendar } from "react-icons/fa";

export function BlogCard({ item }) {
  let date = new Date()
  const Theme = {
    //   card: {
    //     defaultProps: {
    //       variant: "gradient",
    //       color: "blue-gray",
    //       shadow: true,
    //       className: "BlogCard",
    //     },
    //     valid: {
    //       variants: ["filled"],
    //       colors: [
    //         "blue-gray",
    //       ],
    //     },
    //     styles: {
    //       variants: {
    //         gradient: {
    //           "blue-gray": {
    //             backgroud: "bg-gradient-to-tr from-blue-gray-900 to-blue-gray-700",
    //             color: "text-white",
    //             shadow: "shadow-blue-gray-500/40",
    //           },
    //         }
    //       }
    //     }
    //  },
  }
  const navigate = useNavigate()
  const gotoCategory = () => {
    navigate('/category/' + item.category.name)
  }
  const gotoBlog = () => {
    navigate('/blog/' + item._id)
  }

  return (
    <ThemeProvider value={Theme}>
      <Card className="max-w-[24rem] flex-wrap overflow-hidden  hover:scale-105 mt-6 duration-500 dark:bg-black">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
          onClick={gotoBlog}
        >
          <img
            src={`http://localhost:3001/images/${item.image}`}
            alt="ui/ux review check"
            className="w-full h-72"
          />
        </CardHeader>
        <CardBody className="">
          <div className="border-2 inline-block px-2 py-1 rounded-full text-xs text-black border-black hover:bg-black hover:text-white font-medium cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" onClick={gotoCategory}>{item.category.name}</div>
          <div className="line-clamp-2">
            <Typography variant="h5" color="blue-gray" className="mt-4 hover:text-black cursor-pointer dark:text-white" onClick={gotoBlog}>
              {item.title}
            </Typography>
          </div>
          <div className="line-clamp-4">
            <Typography variant="lead" color="text-white" className="mt-3 font-normal text-base  text-justify dark:text-white">
              {parse(item.description)}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="media_blogcard flex flex-grow items-center justify-between pt-0">
          <div className="blog_footer_text flex items-center -space-x-3 ">
            <Avatar name={item.author.username} size='sm' />
            <Typography className="font-normal ps-5 dark:text-white">
              {/* <i class="fa-solid fa-circle-user"></i>  */}
              {item.author.username}
            </Typography>
          </div>
          <Typography className="blog_footer_date font-normal dark:text-white inline-flex items-center "><FaCalendar className="icon" />{date.toLocaleDateString('en-US')}</Typography>
          {/* {console.log(new Date(item.Date).toLocaleDateString('en-US'))} */}
        </CardFooter>
      </Card>
    </ThemeProvider>
  )
};