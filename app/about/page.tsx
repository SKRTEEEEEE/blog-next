import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage(){
    return <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About Me
                </h1>
            </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48flex flex-col gap-2">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/avatar.png" alt={siteConfig.author}/>
                    <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center break-words">
                    {siteConfig.author}
                </h2>
                <p className="text-muted-foreground text-center break-words">
                    Fullstack Developer
                </p>
            </div>
            <p className="text-muted-foreground text-lg py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum debitis esse laudantium, maxime nesciunt voluptatem alias temporibus atque perspiciatis commodi cum ea, dignissimos dolorem ipsam est. Eveniet molestiae officiis delectus ex deserunt vitae vel.</p>
        </div>
    </div>
}