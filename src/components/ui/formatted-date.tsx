import { formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Inline from "./inline";

const FormattedDate = ({date}: {date: string}) => 
<Inline><Calendar /> {formatDate(date)}</Inline>

export default FormattedDate;