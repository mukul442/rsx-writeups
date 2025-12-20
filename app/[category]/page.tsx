import { BlogBasicCard } from "@/components/content-card"

export function generateStaticParams(){
    return [
        {category: 'learn'},
        {category: 'write-ups'},
        {category: 'guides'}
    ]
}

export default async function CategoryPage({params}: {params: Promise<{category: string}>}){
    const {category}  = await params
    return (
        <main className="container mx-auto px-5 py-4">
            <h2 className="text-3xl font-bold lg:text-5xl">{`${category.charAt(0).toUpperCase() + category.slice(1)}`}</h2>
            <div className="grid grid-cols-3 gap-5 pt-4">
                <BlogBasicCard />
                <BlogBasicCard />
                <BlogBasicCard />
                <BlogBasicCard />
                <BlogBasicCard />
                <BlogBasicCard />
            </div>
        </main>
    )
}