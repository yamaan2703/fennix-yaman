"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const TECHNOLOGIES = [
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },

    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Cassandra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
    { name: "DynamoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "CouchDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg" },
    { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Neo4j", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" },
    { name: "InfluxDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg" },

    { name: "AWS RDS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Google Cloud SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

export default function MockupSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [api, setApi] = useState<any>(null);

    /* -------------------------------- GSAP IMAGE ANIMATION -------------------------------- */
    useEffect(() => {
        if (!sectionRef.current || !imageRef.current) return;

        gsap.set(imageRef.current, { opacity: 0, y: 60 });

        gsap.to(imageRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    /* -------------------------------- CONTINUOUS AUTOPLAY -------------------------------- */
    useEffect(() => {
        if (!api) return;

        let intervalId: NodeJS.Timeout | null = null;

        const play = () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(() => {
                if (api && api.scrollNext) {
                    api.scrollNext();
                }
            }, 2000); // Scroll every 2 seconds
        };

        const stop = () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        };

        play();

        const el = carouselRef.current;
        el?.addEventListener("mouseenter", stop);
        el?.addEventListener("mouseleave", play);

        return () => {
            stop();
            el?.removeEventListener("mouseenter", stop);
            el?.removeEventListener("mouseleave", play);
        };
    }, [api]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">

                    {/* MOCKUP IMAGE */}
                    <div ref={imageRef} className="flex justify-center">
                        <div className="relative w-full">
                            {/* <img
                                src="/images/dashboard.png"
                                alt="Dashboard"
                                className="w-full object-contain"
                                loading="eager"
                            /> */}
                            <img
                                src="/images/dashboard-2.png"
                                alt="Dashboard"
                                className="w-full object-contain"
                                loading="eager"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,.6) 60%, white 100%)",
                                }}
                            />
                        </div>
                    </div>

                    {/* TECHNOLOGY SLIDER */}
                    <div ref={carouselRef} className="mt-10">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                loop: true,
                                dragFree: true,
                                align: "start",
                            }}
                        >
                            <CarouselContent className="-ml-4 will-change-transform">
                                {TECHNOLOGIES.map((tech, i) => (
                                    <CarouselItem key={i} className="pl-4 basis-auto">
                                        <div className="flex items-center gap-3 px-6 py-3 cursor-pointer group">
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all"
                                            />
                                            <span className="text-xl font-semibold text-gray-400 group-hover:text-black transition">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                </div>
            </div>
        </section>
    );
}
