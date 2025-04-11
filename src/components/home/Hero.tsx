
import { ButtonLink } from "@/components/ui/button-link";
import { Calendar, Video, UserRound } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container max-w-screen-xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="heading-1">
              <span className="text-accent">Maternal & Child</span> Healthcare At Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with specialists for consultations, follow-ups, and emergency care from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink to="/register" size="lg" variant="default">
                Start Consultation
              </ButtonLink>
              <ButtonLink to="/doctors" size="lg" variant="outline">
                Find Specialists
              </ButtonLink>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Video Consultations</h3>
                  <p className="text-sm text-muted-foreground">Face-to-face care, remotely</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Easy Scheduling</h3>
                  <p className="text-sm text-muted-foreground">Book appointments anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <UserRound className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Specialist Care</h3>
                  <p className="text-sm text-muted-foreground">Expert maternal & child doctors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full filter blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/20 rounded-full filter blur-xl"></div>
              
              <div className="relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Doctor caring for mother and child" 
                  className="rounded-2xl shadow-lg w-full h-auto aspect-square object-cover"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <p className="font-medium text-sm">Available Now</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Our specialists are ready to help you with immediate consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
