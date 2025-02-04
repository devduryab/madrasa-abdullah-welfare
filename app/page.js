import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

    <main className="flex-grow">
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/hero2.jpg"
          alt="Madrasa Abdullah bin Masood"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Educate, Nourish, Heal</h2>
            <p className="text-xl md:text-2xl mb-8">donate us to making a difference in Pakistan</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-800">ہمارا مشن</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Our mission is to provide quality Islamic education to underprivileged children and support the local
            community through various welfare programs. We strive to create a positive impact on society by nurturing
            future leaders with strong moral values and compassion.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-800">ہماری خدمات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <Image
                src="/school.jpg"
                alt="Education"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Providing free Islamic and modern education to over 500 students annually.</p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/food.jpg"
                alt="Food Bank"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Food Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Distributing food packages to 200+ families every month in Karachi.</p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/medical.jpg"
                alt="Medical Camp"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Medical Camp</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Organizing free medical camps twice a year, serving over 1000 patients.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-800">ہماری کہانی</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/hero.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                For over three decades, Madrasa Abdullah bin Masood has been a beacon of hope in our community.
                Founded in 1985 by a group of dedicated scholars, our institution has grown from a small classroom to
                a comprehensive welfare center.
              </p>
              <p className="text-lg">
                Today, we continue to uphold our founders&apos; vision of providing education, nourishment, and healthcare
                to those in need. With your support, we can expand our reach and touch more lives across Pakistan.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-800">عطیہ دیں</h2>
          <div className="text-center">
            <p className="mb-4 text-lg">
              Your generous donations help us continue our mission and expand our services to those in need.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6 text-green-800">ہم سے رابطہ کریں</h2>
          <div className="text-center">
            <p>Address: 123 Welfare Street, Karachi, Pakistan</p>
            <p>Phone: +92 21 1234 5678</p>
            <p>Email: info@madrasaabdullah.org</p>
          </div>
        </section>
      </div>
    </main>

    <footer className="bg-green-800 text-white py-4 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 مدرسہ عبداللہ بن مسعود. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
