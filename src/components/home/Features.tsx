
import { 
  CalendarClock, 
  Users, 
  BadgeCheck,
  FileText, 
  Clock, 
  HeartPulse
} from "lucide-react";

const features = [
  {
    icon: <CalendarClock className="h-6 w-6 text-primary" />,
    title: "24/7 Appointment Booking",
    description: "Schedule consultations anytime, day or night, for you or your child with our easy-to-use booking system."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Specialized Care Teams",
    description: "Connect with dedicated specialists in maternal health, pediatrics, and family medicine."
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" />,
    title: "Verified Medical Professionals",
    description: "All our doctors are verified and licensed professionals with expertise in their fields."
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Digital Prescriptions",
    description: "Receive prescriptions digitally after your consultation for convenient medication access."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Quick Response Times",
    description: "Get medical attention when you need it with our prompt consultation services."
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: "Complete Health Records",
    description: "Keep all your family's health information securely stored and easily accessible."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">
            Complete Telehealth Features
          </h2>
          <p className="text-muted-foreground text-lg">
            AfyaMkononi provides a comprehensive suite of features designed specifically for maternal and child healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
