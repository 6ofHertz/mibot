
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/button-link";
import { 
  Baby, 
  HeartPulse, 
  Stethoscope, 
  CalendarClock,
  Brain,
  Pill,
  ShieldCheck,
  Activity,
  FileText,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">Our Healthcare Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive telehealth services designed specifically for maternal and child healthcare needs
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container max-w-screen-xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
              <div>
                <h2 className="heading-2 mb-6">
                  Maternal Health <span className="text-primary">Services</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our maternal health services provide comprehensive care for expectant mothers throughout pregnancy, childbirth, and the postnatal period.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-primary/10 p-1">
                      <HeartPulse className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Prenatal Consultations</h3>
                      <p className="text-muted-foreground">Regular check-ups throughout pregnancy to monitor mother and baby health</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-primary/10 p-1">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mental Health Support</h3>
                      <p className="text-muted-foreground">Counseling services for managing anxiety, postpartum depression, and other concerns</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-primary/10 p-1">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Birth Planning</h3>
                      <p className="text-muted-foreground">Work with specialists to create personalized birth plans</p>
                    </div>
                  </li>
                </ul>
                
                <ButtonLink to="/services/maternal" className="mt-8">
                  Learn More About Maternal Services
                </ButtonLink>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/10 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607207685437-bfe401de40f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Maternal Health Services" 
                  className="rounded-2xl shadow-md w-full aspect-square object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-accent/10 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pediatric Care Services" 
                  className="rounded-2xl shadow-md w-full aspect-square object-cover"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="heading-2 mb-6">
                  Pediatric <span className="text-accent">Care</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our pediatric services ensure your child receives expert care from infancy through childhood for both wellness and illness.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-accent/10 p-1">
                      <Baby className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Well-Child Check-ups</h3>
                      <p className="text-muted-foreground">Regular assessments of growth, development, and overall health</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-accent/10 p-1">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Immunization Guidance</h3>
                      <p className="text-muted-foreground">Expert advice on childhood immunization schedules</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full bg-accent/10 p-1">
                      <Stethoscope className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Illness Consultations</h3>
                      <p className="text-muted-foreground">Prompt care for common childhood illnesses and concerns</p>
                    </div>
                  </li>
                </ul>
                
                <ButtonLink to="/services/pediatric" variant="accent" className="mt-8">
                  Learn More About Pediatric Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">Explore Our Services</h2>
              <p className="text-muted-foreground text-lg">
                Find detailed information about our comprehensive healthcare offerings
              </p>
            </div>
            
            <Tabs defaultValue="consultations" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="consultations">Consultations</TabsTrigger>
                <TabsTrigger value="specialists">Specialist Care</TabsTrigger>
                <TabsTrigger value="followup">Follow-up Care</TabsTrigger>
              </TabsList>
              <TabsContent value="consultations" className="mt-6">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Telehealth Consultations</h3>
                  <p className="text-muted-foreground mb-4">
                    Our video consultations connect you with healthcare professionals for diagnosis, treatment, and advice without leaving your home.
                  </p>
                  
                  <h4 className="font-medium mt-6 mb-3">Consultation Types:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded p-4">
                      <h5 className="font-medium mb-2">Scheduled Appointments</h5>
                      <p className="text-sm text-muted-foreground">
                        Book appointments in advance at times convenient for you.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <h5 className="font-medium mb-2">Urgent Care</h5>
                      <p className="text-sm text-muted-foreground">
                        Same-day appointments for immediate health concerns.
                      </p>
                    </div>
                  </div>
                  
                  <ButtonLink to="/services/consultations" className="mt-6">
                    Book a Consultation
                  </ButtonLink>
                </div>
              </TabsContent>
              
              <TabsContent value="specialists" className="mt-6">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Specialist Doctors</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with our network of qualified specialists with expertise in various areas of maternal and child healthcare.
                  </p>
                  
                  <h4 className="font-medium mt-6 mb-3">Our Specialists Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                      <span>Obstetricians & Gynecologists</span>
                    </li>
                    <li className="flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                      <span>Pediatricians</span>
                    </li>
                    <li className="flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                      <span>Neonatologists</span>
                    </li>
                    <li className="flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                      <span>Child Development Specialists</span>
                    </li>
                    <li className="flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                      <span>Family Medicine Practitioners</span>
                    </li>
                  </ul>
                  
                  <ButtonLink to="/doctors" className="mt-6">
                    Find a Specialist
                  </ButtonLink>
                </div>
              </TabsContent>
              
              <TabsContent value="followup" className="mt-6">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Follow-up Care</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous care is essential for monitoring health progress and ensuring optimal recovery and development.
                  </p>
                  
                  <h4 className="font-medium mt-6 mb-3">Our Follow-up Services:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-muted/50 rounded p-4">
                      <h5 className="font-medium mb-2">Treatment Monitoring</h5>
                      <p className="text-sm text-muted-foreground">
                        Regular check-ins to assess how treatments are working and make adjustments as needed.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <h5 className="font-medium mb-2">Recovery Progress</h5>
                      <p className="text-sm text-muted-foreground">
                        Track recovery from illness or procedures with professional guidance.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <h5 className="font-medium mb-2">Developmental Milestones</h5>
                      <p className="text-sm text-muted-foreground">
                        Monitor child development progress with expert assessment and advice.
                      </p>
                    </div>
                  </div>
                  
                  <ButtonLink to="/services/followup" className="mt-6">
                    Schedule Follow-up Care
                  </ButtonLink>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20">
          <div className="container max-w-screen-xl px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do video consultations work?</AccordionTrigger>
                  <AccordionContent>
                    Our video consultations take place through our secure platform. Once you schedule an appointment, you'll receive a link to join the consultation at the designated time. You'll need a device with a camera, microphone, and internet connection. The doctor will discuss your concerns, provide diagnoses when possible, and recommend treatments or further steps.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of conditions can be treated via telehealth?</AccordionTrigger>
                  <AccordionContent>
                    Our telehealth services can address many common maternal and pediatric conditions. For mothers, we can provide prenatal and postnatal check-ups, lactation support, mental health consultations, and general health concerns. For children, we can address common illnesses, developmental questions, behavioral issues, and follow-up care. Some conditions may require in-person examination, which our doctors will advise if necessary.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I get prescriptions through AfyaMkononi?</AccordionTrigger>
                  <AccordionContent>
                    If your doctor determines you need medication, they can issue a digital prescription through our platform. You'll receive the prescription in your patient portal, which you can then take to your preferred pharmacy. For certain medications, we can arrange delivery to your home through our partner pharmacies.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Are all doctors on the platform certified specialists?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all healthcare providers on AfyaMkononi are licensed and certified in their specialties. We verify credentials, experience, and professional standing before allowing any doctor to join our platform. You can view each doctor's qualifications, specialties, and patient reviews on their profile.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How are my medical records kept secure?</AccordionTrigger>
                  <AccordionContent>
                    We take data security very seriously. All medical records are stored in an encrypted format on secure servers. Our platform is compliant with healthcare data protection regulations, and access to your information is strictly controlled. Only you and your healthcare providers can access your medical records.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
