import { Template } from "@/types/template"
import Image from "next/image"
import Link from "next/link"

interface TemplateCardProps {
    template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
    return (
        <Link href={`/templates/${template.slug}`} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                <Image
                    src={template.images[0]}
                    alt={template.name}
                    fill
                    className="object-cover group-hover:opacity-0 transition duration-200"
                />
                {template.images[1] && (
                    <Image
                        src={template.images[1]}
                        alt={template.name}
                        fill
                        className="object-cover opacity-0 group-hover:opacity-100 transition duration-200"
                    />
                )}
            </div>
            <div className="flex flex-col justify-center items-start">
                <h3 className="font-[550] line-clamp-1">{template.name}</h3>
                {template.type === "free" && (
                    <span className="text-sm text-muted-foreground">Free</span>
                )}
                {template.type === "paid" && (
                    <span className="text-sm text-muted-foreground">{template.price}</span>
                )}
            </div>
        </Link>
    )
}
