
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Baby, HeartPulse, Stethoscope, CalendarClock } from "lucide-react";

const services = [
  {
    icon: <HeartPulse className="h-12 w-12 text-primary" />,
    title: "Maternal Health",
    description: "Comprehensive care for expectant and new mothers, including prenatal and postnatal consultations, nutrition guidance, and mental health support.",
    link: "/services/maternal"
  },
  {
    icon: <Baby className="h-12 w-12 text-primary" />,
    title: "Pediatric Care",
    description: "Specialized healthcare for infants and children, including wellness checks, developmental assessments, and management of common childhood illnesses.",
    link: "/services/pediatric"
  },
  {
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    title: "Specialist Consultations",
    description: "Connect with pediatricians, obstetricians, gynecologists, and other specialists for expert medical advice and treatment plans.",
    link: "/services/specialists"
  },
  {
    icon: <CalendarClock className="h-12 w-12 text-primary" />,
    title: "Follow-up Care",
    description: "Regular follow-up appointments to monitor health progress, adjust treatment plans, and ensure optimal recovery and development.",
    link: "/services/followup"
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of specialized services designed to provide quality healthcare for mothers and children.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <ButtonLink to={service.link} variant="default" className="w-full">
                  Learn More
                </ButtonLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
