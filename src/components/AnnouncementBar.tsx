"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Times from "../assets/icons/times.svg";

type Props = {
    announcementText?: string
}

export default function AnnouncementBar(props: Props) {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(props.announcementText !== undefined);
    }, [props])

    return isVisible && (
        <div className="bg-black">
            <section className="container text-sm flex items-center justify-between text-white py-2">
                <div className="w-5"></div>
                {props?.announcementText}
                <button onClick={() => setVisible(false)}>
                    <Image alt="Close icon image" width={20} height={20} src={Times} />
                </button>
            </section>
        </div>
    )
}
