import { BlogBasicCard } from "@/components/content-card";
import { BasicFooter } from "@/components/footer";
import { MainHeader } from "@/components/header";

export default function Home() {
  
  return (
    <div>
      <MainHeader />
      <div className="container mx-auto px-5 py-4 grid grid-cols-3 gap-5">
        <BlogBasicCard />
        <BlogBasicCard />
        <BlogBasicCard />
        <BlogBasicCard />
        <BlogBasicCard />
        <BlogBasicCard />
      </div>
      <BasicFooter />
    </div>
  );
}
