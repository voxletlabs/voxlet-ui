import type { MetadataRoute } from "next";
import Navigation from "@/data/Navigation";

export default function sitemap(): MetadataRoute.Sitemap {

    const filteredNavigation = Navigation.filter(
        (group) => group.title !== "Follow For Updates"
    );

    const exploreGroup = filteredNavigation.find((group) => group.title === "Explore");
    const otherGroups = filteredNavigation.filter((group) => group.title !== "Explore");

    const exploreLinks: MetadataRoute.Sitemap = exploreGroup
        ? exploreGroup.links.map((link) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}${link.href}`,
            lastModified: new Date(),
        }))
        : [];

    const otherLinks: MetadataRoute.Sitemap = otherGroups.flatMap((group) =>
        group.links.map((link) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}${link.href}`,
            lastModified: new Date(),
        }))
    );

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
        },
        ...exploreLinks,
        ...otherLinks,
    ];
}
