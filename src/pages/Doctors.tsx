
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StarIcon, MapPin, Calendar } from "lucide-react";

// Sample doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Obstetrics & Gynecology",
    experience: "12 years",
    rating: 4.9,
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Michael Omondi",
    specialty: "Pediatrics",
    experience: "8 years",
    rating: 4.7,
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Dr. Amina Hassan",
    specialty: "Family Medicine",
    experience: "15 years",
    rating: 4.8,
    location: "Kisumu, Kenya",
    image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Dr. Daniel Muthui",
    specialty: "Neonatology",
    experience: "10 years",
    rating: 4.6,
    location: "Nakuru, Kenya",
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available in 2 days",
  },
  {
    id: 5,
    name: "Dr. Elizabeth Wanjiku",
    specialty: "Pediatrics",
    experience: "7 years",
    rating: 4.5,
    location: "Eldoret, Kenya",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available Today",
  },
  {
    id: 6,
    name: "Dr. James Otieno",
    specialty: "Obstetrics & Gynecology",
    experience: "14 years",
    rating: 4.9,
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Available Tomorrow",
  },
];

// Helper components
const Star = ({ filled }: { filled: boolean }) => (
  <StarIcon 
    className={cn(
      "w-4 h-4", 
      filled ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
    )}
  />
);

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={rating >= star} />
      ))}
      <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

// For utility function
import { cn } from "@/lib/utils";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("all");
  
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === "all" || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  const specialties = Array.from(new Set(doctorsData.map(d => d.specialty)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-2 mb-6">Find the Right Specialist</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our highly qualified doctors specializing in maternal and child healthcare
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search by name or specialty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10"
                    />
                  </div>
                </div>
                <div>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors List */}
        <section className="py-16">
          <div className="container max-w-screen-xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden">
                    <div className="aspect-[5/3] relative">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                        {doctor.availability}
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                      <p className="text-primary mb-2">{doctor.specialty}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4 mr-1" /> {doctor.location}
                      </div>
                      <RatingStars rating={doctor.rating} />
                      <p className="mt-3 text-sm">Experience: {doctor.experience}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-lg text-muted-foreground">No doctors match your search criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
