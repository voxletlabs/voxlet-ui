import { Star } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

type Client = {
    name: string;
    jobTitle: string;
    image: string;
    socialMedia: string;
};

type TextTestimonial = {
    type: "text";
    rating: number;
    title: string;
    description: string;
    client: Client;
};

type VideoTestimonial = {
    type: "video";
    client: Client;
    video: {
        url: string;
        thumbnail: string;
    };
};

type Testimonial = TextTestimonial | VideoTestimonial;

const TestimonialsSection = () => {
    return (
        <div
            id="reviews"
            className="relative flex flex-col justify-between items-center max-w-7xl w-full p-4 pt-20 lg:pt-24 lg:pb-12 lg:px-12"
        >
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col gap-2 justify-between items-center">
                    <h3 className="font-semibold text-2xl lg:text-4xl text-center">
                        Hear It Straight{" "}
                        <span className="text-primary-green">
                            {" "}
                            From
                            <br />
                            Our Clients
                        </span>
                    </h3>
                    <div className="text-center opacity-80 duration-300 mb-3 lg:mb-12 text-sm lg:text-base">
                        Real stories. Real results. See what our clients have to say!
                    </div>
                </div>
            </div>
            <div className="w-full mt-6">
                <ul className="isolate w-full grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        testimonial.type === "text" && (
                            <li className="row-span-1 h-full">
                                <Link
                                    target="_blank"
                                    className="flex flex-col justify-between w-full h-full p-3 bg-white/5 rounded-lg border shadow-inner-white/10 duration-300 hover:bg-muted hover:border-black/20 dark:hover:border-white/20"
                                    href={testimonial.client.socialMedia}
                                >
                                    <div className="flex gap-1 p-2">
                                        <div className="flex gap-1 p-2">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Star
                                                    key={index}
                                                    className={`size-5 fill-current ${index < testimonial.rating ? "text-green-500" : "text-green-500 opacity-50"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-1 p-2">
                                        <div className="text-sm font-medium sm:text-base">
                                            {testimonial.title}
                                        </div>
                                        <div className="opacity-70 text-xs sm:text-sm">
                                            {testimonial.description}
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-l from-transparent via-black/10 dark:via-white/10 to-transparent bottom-[-8px] w-full h-px" />
                                    <div className="flex gap-2 items-center px-2 py-4">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img
                                                alt={testimonial.client.name}
                                                loading="lazy"
                                                width={64}
                                                height={64}
                                                decoding="async"
                                                data-nimg={1}
                                                style={{ color: "transparent" }}
                                                src={testimonial.client.image}
                                            />
                                        </div>
                                        <div>
                                            <div className="font-medium">{testimonial.client.name}</div>
                                            <div className="flex gap-1 items-center opacity-70">
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 26"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
                                                </svg>
                                                {testimonial.client.jobTitle}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ) || testimonial.type === "video" && (
                            <li className="row-span-1 h-full" >
                                <Link
                                    href={testimonial.video.url}
                                    target="_blank"
                                    className="group flex flex-col justify-between w-full h-full p-3 gap-2 bg-white/5 rounded-lg border shadow-inner-white/10 duration-300 hover:bg-muted hover:border-black/20 dark:hover:border-white/20"
                                >
                                    <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-lg border border-black/10 dark:border-white/10 group-hover:opacity-100 opacity-80 duration-300">
                                        <div className="absolute z-[1] w-10 h-10 rounded-full flex items-center justify-center border bg-background/80 group-hover:border-green-500/25 shadow-inner-green-500/10 group-hover:bg-black/60 opacity-90 duration-300 group-hover:text-white dark:group-hover:text-green-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0px_10px_rgba(43,251,205,0.35)]">
                                            <svg
                                                width={21}
                                                height={21}
                                                viewBox="0 0 21 21"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.22291 4.46658C5.32176 3.6503 6.16857 3.16271 6.92396 3.4858C7.80796 3.8639 9.79153 4.76278 12.3084 6.21588C14.8258 7.66932 16.5963 8.93795 17.3654 9.51428C18.0224 10.0066 18.0243 10.9833 17.3666 11.4772C16.6046 12.0494 14.8555 13.3029 12.3075 14.7739C9.75863 16.2455 7.79811 17.1337 6.92197 17.5073C6.16636 17.8295 5.32181 17.341 5.22311 16.5264C5.10782 15.5749 4.89352 13.4142 4.89352 10.4957C4.89352 7.57886 5.10757 5.41895 5.22291 4.46658Z"
                                                />
                                            </svg>
                                        </div>
                                        <img
                                            alt={testimonial.client.name}
                                            loading="lazy"
                                            width={720}
                                            height={405}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-full w-full object-cover"
                                            src={testimonial.video.thumbnail}
                                        />
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img
                                                alt={testimonial.client.name}
                                                loading="lazy"
                                                width={64}
                                                height={64}
                                                decoding="async"
                                                data-nimg={1}
                                                style={{ color: "transparent" }}
                                                src={testimonial.client.image}
                                            />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="text-sm font-medium sm:text-base">
                                                {testimonial.client.name}
                                            </div>
                                            <div className="opacity-70 text-xs sm:text-sm">
                                                {testimonial.client.jobTitle}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div >
    )
}

const testimonials: Testimonial[] = [
    {
        type: "text",
        rating: 5,
        title: "Fantastic Service!",
        description: "The team was incredibly professional and delivered beyond our expectations. Highly recommended!",
        client: {
            name: "John Doe",
            jobTitle: "CEO, TechCorp",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
            socialMedia: "https://linkedin.com/in/johndoe",
        },
    },
    {
        type: "video",
        client: {
            name: "Jane Smith",
            jobTitle: "Marketing Director, Creative Co.",
            image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
            socialMedia: "https://twitter.com/janesmith",
        },
        video: {
            url: "https://example.com/jane-testimonial.mp4",
            thumbnail: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
        },
    },
    {
        type: "text",
        rating: 4,
        title: "Great Experience!",
        description: "Loved the collaboration and how smoothly everything went. Will definitely work with them again!",
        client: {
            name: "Mike Johnson",
            jobTitle: "Founder, Startup Inc.",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socialMedia: "https://linkedin.com/in/mikejohnson",
        },
    },
    {
        type: "video",
        client: {
            name: "Emily White",
            jobTitle: "Product Manager, InnovateX",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            socialMedia: "https://twitter.com/emilywhite",
        },
        video: {
            url: "https://example.com/emily-testimonial.mp4",
            thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
        },
    },
    {
        type: "text",
        rating: 5,
        title: "Exceeded Expectations!",
        description: "A seamless experience from start to finish. The attention to detail was remarkable.",
        client: {
            name: "Sarah Lee",
            jobTitle: "COO, NextGen Solutions",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            socialMedia: "https://linkedin.com/in/sarahlee",
        },
    },
    {
        type: "video",
        client: {
            name: "David Brown",
            jobTitle: "CTO, FutureTech",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            socialMedia: "https://twitter.com/davidbrown",
        },
        video: {
            url: "https://example.com/david-testimonial.mp4",
            thumbnail: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
        },
    },
    {
        type: "text",
        rating: 4,
        title: "Highly Professional",
        description: "Working with this team was a pleasure. They understood our needs and executed flawlessly.",
        client: {
            name: "Olivia Martinez",
            jobTitle: "Head of Design, Creators Hub",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            socialMedia: "https://linkedin.com/in/oliviamartinez",
        },
    },
    {
        type: "video",
        client: {
            name: "Chris Evans",
            jobTitle: "Lead Engineer, AI Labs",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
            socialMedia: "https://twitter.com/chrisevans",
        },
        video: {
            url: "https://example.com/chris-testimonial.mp4",
            thumbnail: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
        },
    },
    {
        type: "text",
        rating: 3,
        title: "Outstanding Work!",
        description: "The quality of work and communication was exceptional. Will be back for future projects!",
        client: {
            name: "Sophia Green",
            jobTitle: "Entrepreneur",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            socialMedia: "https://linkedin.com/in/sophiagreen",
        },
    },
];

export default TestimonialsSection