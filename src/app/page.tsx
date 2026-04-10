import ImageAnalysis from "./componentsToUse/ImageAnalysis";
import ImageCreator from "./componentsToUse/ImageCreator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IngredientRecognition from "./componentsToUse/IngredientRecognition";

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
        <TabsContent value="Image analysis">
          <ImageAnalysis />
        </TabsContent>
        <TabsContent value="Ingredient recognition">
          <IngredientRecognition />
        </TabsContent>
        <TabsContent value="Image Creator">
          <ImageCreator />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// export default Home();
