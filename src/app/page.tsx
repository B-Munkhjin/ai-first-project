import ImageCreator from "./componentsToUse/ImageCreator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Tabs defaultValue="overview" className="w-100">
        <TabsList className="bg-[#F4F4F5] py-5 px-3 flex gap-10 rounded-lg">
          <TabsTrigger value="Image analysis">Image analysis</TabsTrigger>
          <TabsTrigger value="Ingredient recognition">
            Ingredient recognition
          </TabsTrigger>
          <TabsTrigger value="Image Creator">Image creator</TabsTrigger>
        </TabsList>
        <TabsContent value="Image analysis">hello</TabsContent>
        <TabsContent value="Ingredient recognition">hiiii</TabsContent>
        <TabsContent value="Image Creator">
          <ImageCreator />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// export default Home();
