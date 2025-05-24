import { FaRegStar, FaStar } from "react-icons/fa";

export default function Rating({ value }) {

    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                index < value ? (
                    <FaStar key={index} className="text-yellow-500 w-4 h-4" />
                ) : (
                    <FaRegStar key={index} className="text-gray-400 w-4 h-4" />
                )
            ))}
        </>
    );
}