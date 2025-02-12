import { MapPin } from "lucide-react";
import Inline from "./inline";
import Link from "next/link";

const Place = ({address, mapPin}: {address: string, mapPin: string}) => mapPin ? <Inline><MapPin/><Link href={mapPin}>{address}</Link></Inline>: <Inline><MapPin/>{address}</Inline>

export default Place;