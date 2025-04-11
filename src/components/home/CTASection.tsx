
import { ButtonLink } from "@/components/ui/button-link";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="container max-w-screen-xl px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl mb-6">
            Get Started with AfyaMkononi Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Join thousands of families who trust our platform for their maternal and child healthcare needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink 
              to="/register" 
              size="xl" 
              variant="accent"
              className="font-semibold"
            >
              Create an Account
            </ButtonLink>
            <ButtonLink 
              to="/doctors" 
              size="xl" 
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Browse Our Doctors
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
