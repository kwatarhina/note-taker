import { Card, CardHeader, CardBody} from "@nextui-org/react";
import React from "react";

interface GeneralCard{
    className?: string;
    title?: string;
    content?: string;
    key?: string;
}
const GeneralCard : React.FC<GeneralCard> = ({className,title, content, key}) => {
    return (
        <Card key={key} className={`py-4 w-full sm:w-48 md:w-60 ${className}`}>
            { title !== undefined && title?.length > 0 && 
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{title}</p>
            </CardHeader>
            }
            <CardBody className="overflow-visible py-2">
                <small className="text-default-500">{content}</small>
                {/* <h1>Hello</h1> */}
            </CardBody>
        </Card>
    )
}

export default GeneralCard