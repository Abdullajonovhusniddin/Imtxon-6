import { useContext } from "react";
import {UserContext} from "../../context/UserContext";

export default function CarrerInnerSection() {
    const {job} = useContext(UserContext);
    return (
        <h1>{job}</h1>
    )
}