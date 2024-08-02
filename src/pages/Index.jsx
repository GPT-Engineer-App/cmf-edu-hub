import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, BookOpen, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Welcome to CMF College</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle className="flex items-center">
              <Laptop className="mr-2" />
              RACHEL: Your Digital Education Server
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="RACHEL Server" className="mx-auto object-cover w-full h-48 mb-4 rounded" />
            <p className="text-gray-700">RACHEL (Remote Area Community Hotspot for Education and Learning) is a portable server that stores educational websites and makes them available over a local (offline) wireless connection. It's designed to bring free digital education to places without internet.</p>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-green-500 text-white">
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Khan Academy: Your Learning Companion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Khan Academy" className="mx-auto object-cover w-full h-48 mb-4 rounded" />
            <p className="text-gray-700">Khan Academy offers practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace. Here's how to use it:</p>
            <ol className="list-decimal list-inside mt-4 text-gray-700">
              <li>Access Khan Academy through RACHEL</li>
              <li>Choose your subject of interest</li>
              <li>Watch video lessons and complete practice exercises</li>
              <li>Track your progress and earn achievements</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-purple-500 text-white">
            <CardTitle className="flex items-center">
              <Database className="mr-2" />
              Other Resources on RACHEL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="/placeholder.svg" alt="Educational Resources" className="mx-auto object-cover w-full h-48 mb-4 rounded" />
              </div>
              <div>
                <p className="text-gray-700">RACHEL includes a variety of educational resources beyond Khan Academy:</p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                  <li>Wikipedia for Schools: A curated selection of Wikipedia articles</li>
                  <li>PhET Interactive Simulations: Science and math simulations</li>
                  <li>CK-12 Textbooks: Free digital textbooks on various subjects</li>
                  <li>MedLine Plus: Medical and health information</li>
                  <li>Project Gutenberg: A library of free eBooks</li>
                </ul>
                <p className="mt-4 text-gray-700">Explore these resources to enhance your learning experience!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
