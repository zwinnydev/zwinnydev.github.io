import { Clock } from "lucide-react";
import Inline from "./inline";

const Time = ({time}: {time: string}) => <Inline><Clock /> {time}</Inline>

export default Time