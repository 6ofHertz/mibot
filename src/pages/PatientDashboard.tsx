
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, Video, FileText, Pill, UserRound, HeartPulse, Baby } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Sample data - in a real app, this would come from a database
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      speciality: "Pediatrician",
      date: "April 15, 2025",
      time: "10:00 AM",
      type: "Video Consultation"
    },
    {
      id: 2,
      doctor: "Dr. Michael Wong",
      speciality: "Obstetrician",
      date: "April 20, 2025",
      time: "2:30 PM",
      type: "Follow-up"
    }
  ];

  const pastAppointments = [
    {
      id: 101,
      doctor: "Dr. Sarah Johnson",
      speciality: "Pediatrician",
      date: "March 28, 2025",
      time: "11:15 AM",
      type: "General Checkup"
    },
    {
      id: 102,
      doctor: "Dr. Emma Davis",
      speciality: "Nutritionist",
      date: "March 10, 2025",
      time: "3:00 PM",
      type: "Dietary Consultation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-secondary/50 py-8 px-4">
        <div className="container max-w-screen-xl">
          <h1 className="text-3xl font-bold">Patient Dashboard</h1>
          <p className="text-muted-foreground">Manage your healthcare appointments and records</p>
        </div>
      </div>
      
      <main className="flex-1 container max-w-screen-xl py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <Video className="h-4 w-4" />
                  New Consultation
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <CalendarDays className="h-4 w-4" />
                  Schedule Appointment
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <FileText className="h-4 w-4" />
                  View Medical Records
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <Pill className="h-4 w-4" />
                  Prescription Refills
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Health Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Profile Completion</span>
                  </div>
                  <span className="text-sm">85%</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Last Checkup</span>
                  </div>
                  <span className="text-sm">March 28, 2025</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Baby className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Child's Next Vaccine</span>
                  </div>
                  <span className="text-sm">Due in 15 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>
                  Manage your scheduled appointments with healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming" className="space-y-4">
                    {upcomingAppointments.length > 0 ? (
                      upcomingAppointments.map((appointment) => (
                        <div 
                          key={appointment.id}
                          className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div>
                            <h4 className="font-medium">{appointment.doctor}</h4>
                            <p className="text-sm text-muted-foreground">{appointment.speciality}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <CalendarDays className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{appointment.date}</span>
                              <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                              <span className="text-sm">{appointment.time}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mt-2">
                              <Video className="h-3 w-3" />
                              {appointment.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm" variant="default">Join Call</Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-muted-foreground">No upcoming appointments</p>
                        <Button variant="outline" className="mt-4">
                          Schedule an Appointment
                        </Button>
                      </div>
                    )}
                    
                    <div className="pt-4 text-center">
                      <ButtonLink to="/schedule" variant="outline">
                        View All Appointments
                      </ButtonLink>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="past" className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <div 
                        key={appointment.id}
                        className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <h4 className="font-medium">{appointment.doctor}</h4>
                          <p className="text-sm text-muted-foreground">{appointment.speciality}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{appointment.date}</span>
                            <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full mt-2">
                            {appointment.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">View Summary</Button>
                          <Button size="sm" variant="outline">Book Follow-up</Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 text-center">
                      <ButtonLink to="/appointments/history" variant="outline">
                        View Full History
                      </ButtonLink>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Prescriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Prenatal Vitamins</p>
                        <p className="text-xs text-muted-foreground">Prescribed on April 1, 2025</p>
                      </div>
                      <Button size="sm" variant="ghost">View</Button>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Children's Paracetamol</p>
                        <p className="text-xs text-muted-foreground">Prescribed on March 25, 2025</p>
                      </div>
                      <Button size="sm" variant="ghost">View</Button>
                    </li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-2">
                    View all prescriptions
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Child's 12-Month Vaccine</p>
                        <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                      </div>
                      <Button size="sm" variant="ghost">Schedule</Button>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Postnatal Checkup</p>
                        <p className="text-xs text-muted-foreground">Due in 3 days</p>
                      </div>
                      <Button size="sm" variant="ghost">Schedule</Button>
                    </li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-2">
                    View all reminders
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientDashboard;
