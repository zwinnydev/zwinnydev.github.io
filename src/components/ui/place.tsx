import { MapPin } from "lucide-react";
import Inline from "./inline";

const Place = ({address}: {address: string}) => <Inline><MapPin/>{address}</Inline>

export default Place;