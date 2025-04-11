
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Award, GraduationCap, HeartPulse } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Our Mission</h1>
              <p className="text-xl text-muted-foreground">
                AfyaMkononi is committed to bringing quality maternal and child healthcare
                to everyone, everywhere, through innovative telehealth solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1584516150877-6510fb605783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Doctor caring for patients" 
                  className="rounded-2xl shadow-md w-full h-auto aspect-square object-cover"
                />
              </div>
              <div>
                <h2 className="heading-2 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg">
                  <p>
                    Founded in 2023, AfyaMkononi was born out of a simple yet powerful vision: to make quality maternal and child healthcare accessible to everyone, regardless of location.
                  </p>
                  <p>
                    Our founders, experienced healthcare professionals, recognized the challenges many families face in accessing specialist care, especially in remote areas. They believed that technology could bridge this gap.
                  </p>
                  <p>
                    Today, AfyaMkononi connects thousands of patients with qualified specialists through our secure telehealth platform, ensuring that distance is never a barrier to receiving the care you and your family deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Consultations Completed</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Specialist Doctors</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Emergency Support</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container max-w-screen-xl px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-muted-foreground text-lg">
                Our experienced team is dedicated to providing quality healthcare solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Jane Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dr. Jane Smith</h3>
                  <p className="text-primary mb-4">Chief Medical Officer</p>
                  <p className="text-muted-foreground mb-4">
                    Specialist in pediatrics with over 15 years of experience in maternal and child healthcare.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Robert Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dr. Robert Johnson</h3>
                  <p className="text-primary mb-4">Medical Director</p>
                  <p className="text-muted-foreground mb-4">
                    Obstetrician with a passion for improving maternal healthcare access in underserved communities.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Sarah Kimani" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dr. Sarah Kimani</h3>
                  <p className="text-primary mb-4">Technology Director</p>
                  <p className="text-muted-foreground mb-4">
                    Expert in healthcare technology with a background in pediatric medicine and public health initiatives.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-screen-xl px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do at AfyaMkononi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex items-start gap-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    We always put patients first, designing our services around their needs and ensuring a compassionate approach to healthcare delivery.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex items-start gap-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from the quality of our medical consultations to the user experience on our platform.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex items-start gap-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace technology and innovative approaches to solve healthcare challenges and improve access to quality care.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex items-start gap-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    We believe that everyone deserves access to quality healthcare, regardless of their location, background, or circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
