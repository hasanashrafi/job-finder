import SearchBox from "@/components/SearchBox";
import Layout from "@/layout/Layout";


export default function Home() {
  return (
    <Layout>

      <main className="bg-[#F6F4FE] flex min-h-screen flex-col items-center justify-between p-10">
        <div className=" z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
          <SearchBox/>
        </div>
      </main>
    </Layout>
  );
}
