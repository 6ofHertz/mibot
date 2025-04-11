
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Clock, Video, FileText, User, Users, Bell, Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("today");

  // Sample data - in a real app, this would come from a database
  const todaysAppointments = [
    {
      id: 1,
      patient: "Maria Lopez",
      age: "28 years",
      time: "10:00 AM",
      type: "Video Consultation",
      reason: "Pregnancy Check-up (2nd Trimester)"
    },
    {
      id: 2,
      patient: "John Doe",
      age: "2 years",
      time: "11:30 AM",
      type: "Video Consultation",
      reason: "Fever and Cough"
    },
    {
      id: 3,
      patient: "Sarah Williams",
      age: "32 years",
      time: "2:15 PM",
      type: "Follow-up",
      reason: "Postnatal Depression"
    }
  ];

  const upcomingAppointments = [
    {
      id: 101,
      patient: "Adam Johnson",
      age: "3 years",
      date: "April 15, 2025",
      time: "9:00 AM",
      type: "General Checkup"
    },
    {
      id: 102,
      patient: "Emily Chen",
      age: "31 years",
      date: "April 15, 2025",
      time: "1:30 PM",
      type: "Pregnancy Consultation"
    },
    {
      id: 103,
      patient: "Aisha Patel",
      age: "35 years",
      date: "April 16, 2025",
      time: "11:00 AM",
      type: "Follow-up"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-secondary/50 py-8 px-4">
        <div className="container max-w-screen-xl">
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
          <p className="text-muted-foreground">Manage your patients, appointments, and consultations</p>
        </div>
      </div>
      
      <main className="flex-1 container max-w-screen-xl py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats cards */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{todaysAppointments.length}</div>
              <p className="text-sm mt-1 opacity-80">2 video, 1 in-person</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">126</div>
              <p className="text-sm text-muted-foreground mt-1">+3 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-sm text-muted-foreground mt-1">Next 7 days</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-sm text-muted-foreground mt-1">2 urgent</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Doctor Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Dr. Profile" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Dr. Alex Morgan</h3>
                    <p className="text-sm text-muted-foreground">Pediatrician & Child Health Specialist</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <Button variant="outline" className="w-full">Complete Your Profile</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <Calendar className="h-4 w-4" />
                  Update Schedule
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <FileText className="h-4 w-4" />
                  Write Prescription
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <Users className="h-4 w-4" />
                  View Patient List
                </Button>
                <Button className="w-full flex justify-start gap-2" variant="outline">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent className="divide-y">
                <div className="pb-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Medical Report Review</p>
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">Urgent</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Patient: Maria Lopez</p>
                </div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Update Prescription</p>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">Today</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Patient: John Doe</p>
                </div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Lab Results Review</p>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">Tomorrow</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">3 patient reports</p>
                </div>
                <div className="pt-3">
                  <Button variant="link" className="p-0 h-auto">View all tasks</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>
                  Manage your upcoming patient consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="today" className="space-y-4">
                    {todaysAppointments.map((appointment) => (
                      <div 
                        key={appointment.id}
                        className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{appointment.patient}</h4>
                              <p className="text-xs text-muted-foreground">{appointment.age}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">{appointment.reason}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{appointment.time}</span>
                              <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-1">
                                <Video className="h-3 w-3" />
                                {appointment.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">View Records</Button>
                          <Button size="sm" variant="default">Start Session</Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 text-center">
                      <ButtonLink to="/doctor/schedule" variant="outline">
                        View Full Schedule
                      </ButtonLink>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upcoming" className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div 
                        key={appointment.id}
                        className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{appointment.patient}</h4>
                              <p className="text-xs text-muted-foreground">{appointment.age}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">{appointment.type}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <CalendarDays className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{appointment.date}</span>
                              <Clock className="h-3 w-3 text-muted-foreground ml-1" />
                              <span className="text-xs text-muted-foreground">{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="outline">View Records</Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 text-center">
                      <ButtonLink to="/doctor/schedule" variant="outline">
                        View All Appointments
                      </ButtonLink>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Patient Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Maria Lopez</p>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Updated</span>
                      </div>
                      <p className="text-sm">Uploaded new blood test results</p>
                      <p className="text-xs text-muted-foreground mt-1">Today, 9:32 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Sarah Williams</p>
                        <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">Message</span>
                      </div>
                      <p className="text-sm">Sent a message regarding medication side effects</p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 4:15 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">John Doe</p>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Appointment</span>
                      </div>
                      <p className="text-sm">Rescheduled appointment to April 16th</p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 11:20 AM</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="link" className="p-0 h-auto mt-4">
                  View all activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
