import Welcome from "@/markdowns/welcome.md";

function CustomH1({ children }: {children: any}) {
  return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>
}

const overrideComponents = {
  h1: CustomH1,
}

export default function Page(){
    return <Welcome components={overrideComponents} />;
}